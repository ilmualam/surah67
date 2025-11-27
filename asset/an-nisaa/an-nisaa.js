// ================================
// Surah An-Nisa Interactive Tool
// Verses text from local JSON (Arab + Rumi + Terjemahan)
// Audio ayat demi ayat via api.alquran.cloud (Mishary, Husary, Sudais)
// Dibina khas untuk ilmualam.com – Jangan buang kredit ni ya :)
// ================================
(function () {
  'use strict';

  // ------- CONFIG -------
  const SURAH_NUMBER = 4;
  const ILMUALAM_DOMAIN = 'https://www.ilmualam.com';
  const VERSES_JSON_URL =
    'https://cdn.jsdelivr.net/gh/ilmualam/quran-tool@master/asset/an-nisa/surah_an_nisa_verses.json'; 
  // ^ Tukar path ikut repo kau. Struktur JSON ikut file yang kau bagi (number, arabic, transliteration, translation).

  // Qari → edition id api.alquran.cloud
  const QARI_EDITIONS = {
    mishary: 'ar.alafasy',
    husary: 'ar.husary',
    sudais: 'ar.abdurrahmaansudais'
  };

  // Storage key untuk bookmark
  const BOOKMARK_STORAGE_KEY = 'ilmualam_surah_an_nisa_bookmarks_v1';

  // ------- DOM ELEMENTS -------
  const container = document.getElementById('surah-an-nisa-container');
  if (!container) return; // keluar senyap kalau bukan pada page tool

  const versesContainer = document.getElementById('versesContainer');
  const loadingIndicator = document.getElementById('loadingIndicator');
  const toastEl = document.getElementById('toast');

  const playPauseBtn = document.getElementById('playPauseBtn');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const progressBar = document.getElementById('progressBar');
  const currentVerseLabel = document.getElementById('currentVerse');
  const audioTimeLabel = document.getElementById('audioTime');
  const qariSelector = document.getElementById('qariSelector');

  const settingsToggle = document.getElementById('settingsToggle');
  const settingsContent = document.getElementById('settingsContent');
  const arabicSizeRange = document.getElementById('arabicSize');
  const arabicSizeValue = document.getElementById('arabicSizeValue');
  const translationSizeRange = document.getElementById('translationSize');
  const translationSizeValue = document.getElementById('translationSizeValue');
  const showTransliterationCheckbox = document.getElementById('showTransliteration');
  const autoScrollCheckbox = document.getElementById('autoScroll');

  // ------- INTERNAL STATE -------
  let versesData = [];             // dari JSON (arab + transliteration + translation)
  let audioUrls = [];              // url audio ikut ayat (ikut qari)
  let currentAyahIndex = 0;        // 0-based index
  let isPlaying = false;
  let bookmarks = new Set();       // ayat yang dibookmark
  let audio = null;
  let isAutoPlayChain = false;     // untuk auto play berterusan

  // tanda ilmualam.com untuk “signature” dalam DOM (anti curi sikit-sikit)
  const sig = document.createElement('div');
  sig.style.display = 'none';
  sig.textContent = 'Interactive Surah An-Nisa Tool © ' + ILMUALAM_DOMAIN;
  container.appendChild(sig);
  console.info('Interactive Surah An-Nisa Tool powered by', ILMUALAM_DOMAIN);

  // ------- TOAST -------
  function showToast(message, duration = 2500) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    setTimeout(() => toastEl.classList.remove('show'), duration);
  }

  // ------- BOOKMARK STORAGE -------
  function loadBookmarks() {
    try {
      const raw = localStorage.getItem(BOOKMARK_STORAGE_KEY);
      if (!raw) return;
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) {
        bookmarks = new Set(arr);
      }
    } catch (e) {
      console.warn('Bookmark load error', e);
    }
  }

  function saveBookmarks() {
    try {
      localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(Array.from(bookmarks)));
    } catch (e) {
      console.warn('Bookmark save error', e);
    }
  }

  // ------- RENDER VERSES -------
  function createVerseElement(verseObj, index) {
    const vNumber = verseObj.number;

    const verseEl = document.createElement('div');
    verseEl.className = 'verse';
    verseEl.dataset.index = index;
    verseEl.id = 'an-nisa-ayah-' + vNumber;

    const header = document.createElement('div');
    header.className = 'verse-header';

    const numEl = document.createElement('button');
    numEl.className = 'verse-number';
    numEl.type = 'button';
    numEl.textContent = vNumber;
    numEl.setAttribute('aria-label', 'Mainkan ayat ' + vNumber);

    const actions = document.createElement('div');
    actions.className = 'verse-actions';

    // Play icon per ayat
    const playBtn = document.createElement('button');
    playBtn.className = 'verse-action-btn verse-play-btn';
    playBtn.type = 'button';
    playBtn.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
    playBtn.title = 'Mainkan ayat ' + vNumber;

    // Bookmark
    const bookmarkBtn = document.createElement('button');
    bookmarkBtn.className = 'verse-action-btn verse-bookmark-btn';
    bookmarkBtn.type = 'button';
    bookmarkBtn.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4c-1.1 0-2 .9-2 2v14l8-3.5L20 20V6c0-1.1-.9-2-2-2H6z"/></svg>';
    bookmarkBtn.title = 'Tandabuku ayat ' + vNumber;

    if (bookmarks.has(vNumber)) {
      bookmarkBtn.classList.add('is-bookmarked');
    }

    // Copy
    const copyBtn = document.createElement('button');
    copyBtn.className = 'verse-action-btn verse-copy-btn';
    copyBtn.type = 'button';
    copyBtn.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>';
    copyBtn.title = 'Salin ayat';

    // Share
    const shareBtn = document.createElement('button');
    shareBtn.className = 'verse-action-btn verse-share-btn';
    shareBtn.type = 'button';
    shareBtn.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.02-4.11A2.994 2.994 0 0018 7.91C19.66 7.91 21 6.57 21 4.91 21 3.25 19.66 1.91 18 1.91s-3 1.34-3 3c0 .24.04.47.09.7L8.07 9.72A2.99 2.99 0 006 8.91c-1.66 0-3 1.34-3 3 0 1.66 1.34 3 3 3 .83 0 1.58-.34 2.12-.89l7.02 4.11c-.05.21-.08.43-.08.66 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.91-2.92-2.91z"/></svg>';
    shareBtn.title = 'Kongsi ayat';

    actions.appendChild(playBtn);
    actions.appendChild(bookmarkBtn);
    actions.appendChild(copyBtn);
    actions.appendChild(shareBtn);

    header.appendChild(numEl);
    header.appendChild(actions);

    const arabicEl = document.createElement('p');
    arabicEl.className = 'verse-arabic';
    arabicEl.textContent = verseObj.arabic || '';

    const translitEl = document.createElement('p');
    translitEl.className = 'verse-transliteration';
    translitEl.textContent = verseObj.transliteration || '';

    const translationEl = document.createElement('p');
    translationEl.className = 'verse-translation';
    translationEl.textContent = verseObj.translation || '';

    verseEl.appendChild(header);
    verseEl.appendChild(arabicEl);
    verseEl.appendChild(translitEl);
    verseEl.appendChild(translationEl);

    // Event listeners
    playBtn.addEventListener('click', () => {
      isAutoPlayChain = true;
      playFromIndex(index);
    });

    numEl.addEventListener('click', () => {
      isAutoPlayChain = true;
      playFromIndex(index);
    });

    bookmarkBtn.addEventListener('click', () => {
      toggleBookmark(vNumber, bookmarkBtn);
    });

    copyBtn.addEventListener('click', () => {
      copyVerse(verseObj);
    });

    shareBtn.addEventListener('click', () => {
      shareVerse(verseObj);
    });

    return verseEl;
  }

  function renderVerses() {
    versesContainer.innerHTML = '';
    versesData.forEach((v, idx) => {
      versesContainer.appendChild(createVerseElement(v, idx));
    });
  }

  // ------- ACTIVE / HIGHLIGHT -------
  function setActiveVerse(index) {
    const prev = versesContainer.querySelector('.verse.active');
    if (prev) prev.classList.remove('active');

    const verseEl = versesContainer.querySelector(`.verse[data-index="${index}"]`);
    if (verseEl) {
      verseEl.classList.add('active');
      if (autoScrollCheckbox && autoScrollCheckbox.checked) {
        verseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    const verseObj = versesData[index];
    if (verseObj && currentVerseLabel) {
      currentVerseLabel.textContent = 'Ayat ' + verseObj.number;
    }
  }

  // ------- BOOKMARK TOGGLE -------
  function toggleBookmark(verseNumber, btnEl) {
    if (bookmarks.has(verseNumber)) {
      bookmarks.delete(verseNumber);
      btnEl.classList.remove('is-bookmarked');
      showToast('Tandabuku dibuang untuk ayat ' + verseNumber);
    } else {
      bookmarks.add(verseNumber);
      btnEl.classList.add('is-bookmarked');
      showToast('Ayat ' + verseNumber + ' disimpan dalam tandabuku');
    }
    saveBookmarks();
  }

  // ------- COPY & SHARE -------
  function buildVersePlainText(v) {
    const lines = [
      'Surah An-Nisa (4) – Ayat ' + v.number,
      '',
      v.arabic || '',
      '',
      (v.transliteration || ''),
      '',
      (v.translation || ''),
      '',
      'Sumber: ' + ILMUALAM_DOMAIN
    ];
    return lines.join('\n');
  }

  function copyVerse(v) {
    const text = buildVersePlainText(v);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => showToast('Teks ayat disalin ke papan klip'),
        () => fallbackCopy(text)
      );
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.top = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('Teks ayat disalin ke papan klip');
    } catch (e) {
      console.warn('Copy fallback gagal', e);
      showToast('Gagal menyalin teks.');
    }
  }

  function shareVerse(v) {
    const text = buildVersePlainText(v);
    const url = ILMUALAM_DOMAIN + '/surah-an-nisa-teks-arab-rumi-terjemahan-audio';
    if (navigator.share) {
      navigator
        .share({
          title: 'Surah An-Nisa – Ayat ' + v.number,
          text,
          url
        })
        .catch(() => {
          // user cancel, tak perlu apa-apa
        });
    } else {
      copyVerse(v);
      showToast('Perkongsian tidak disokong. Teks telah disalin.');
    }
  }

  // ------- AUDIO INIT -------
  function initAudio() {
    if (audio) {
      audio.pause();
      audio.removeAttribute('src');
      audio = null;
    }
    audio = new Audio();
    audio.preload = 'auto';

    audio.addEventListener('timeupdate', () => {
      if (!audio || !audio.duration || !progressBar || !audioTimeLabel) return;
      const pct = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = pct + '%';
      audioTimeLabel.textContent = formatTime(audio.currentTime) + ' / ' + formatTime(audio.duration);
    });

    audio.addEventListener('ended', () => {
      progressBar.style.width = '0%';
      if (isAutoPlayChain && currentAyahIndex < versesData.length - 1) {
        currentAyahIndex++;
        playFromIndex(currentAyahIndex);
      } else {
        isPlaying = false;
        updatePlayPauseUI();
      }
    });

    audio.addEventListener('error', () => {
      isPlaying = false;
      updatePlayPauseUI();
      showToast('Ralat memuatkan audio. Cuba tukar qari atau periksa Internet.');
    });
  }

  function formatTime(sec) {
    if (!isFinite(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, '0');
    return m + ':' + s;
  }

  function updatePlayPauseUI() {
    if (!playIcon || !pauseIcon) return;
    if (isPlaying) {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'inline';
    } else {
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
    }
  }

  function playFromIndex(index) {
    if (!audioUrls[index]) {
      showToast('Audio belum sedia untuk ayat ini.');
      return;
    }
    currentAyahIndex = index;
    if (!audio) initAudio();
    audio.src = audioUrls[index];
    audio.play().then(
      () => {
        isPlaying = true;
        setActiveVerse(index);
        updatePlayPauseUI();
      },
      () => {
        isPlaying = false;
        updatePlayPauseUI();
        showToast('Gagal memainkan audio.');
      }
    );
  }

  function togglePlayPauseMain() {
    if (!audio) {
      // mula dari ayat semasa
      isAutoPlayChain = true;
      playFromIndex(currentAyahIndex);
      return;
    }
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      updatePlayPauseUI();
    } else {
      audio
        .play()
        .then(() => {
          isPlaying = true;
          updatePlayPauseUI();
        })
        .catch(() => {
          isPlaying = false;
          updatePlayPauseUI();
        });
    }
  }

  // ------- FETCH AUDIO URLS -------
  async function fetchAudioForQari(qariKey) {
    const edition = QARI_EDITIONS[qariKey] || QARI_EDITIONS.mishary;
    try {
      const res = await fetch(
        'https://api.alquran.cloud/v1/surah/' + SURAH_NUMBER + '/' + edition
      );
      const json = await res.json();
      if (json.code !== 200 || !json.data || !Array.isArray(json.data.ayahs)) {
        throw new Error('Respon audio tidak sah');
      }
      const ayahs = json.data.ayahs;
      // pastikan bilangan ayat match JSON lokal
      audioUrls = ayahs.map(a => a.audio || (a.audioSecondary && a.audioSecondary[0]) || '');
      if (audioUrls.length !== versesData.length) {
        console.warn('Bilangan audio != bilangan ayat teks', audioUrls.length, versesData.length);
      }
      showToast('Audio dimuatkan untuk qari: ' + qariSelector.options[qariSelector.selectedIndex].text);
    } catch (e) {
      console.error('Fetch audio error', e);
      showToast('Gagal memuatkan audio untuk qari ini.');
    }
  }

  // ------- SETTINGS / UI -------
  function initSettingsPanel() {
    if (settingsToggle && settingsContent) {
      settingsToggle.addEventListener('click', () => {
        const show = settingsContent.style.display === 'none' || !settingsContent.style.display;
        settingsContent.style.display = show ? 'block' : 'none';
      });
    }

    if (arabicSizeRange && arabicSizeValue) {
      const applyArabicSize = val => {
        const px = val + 'px';
        arabicSizeValue.textContent = px;
        container.style.setProperty('--an-nisa-arabic-font', px);
      };
      arabicSizeRange.addEventListener('input', e => applyArabicSize(e.target.value));
      applyArabicSize(arabicSizeRange.value);
    }

    if (translationSizeRange && translationSizeValue) {
      const applyTranslationSize = val => {
        const px = val + 'px';
        translationSizeValue.textContent = px;
        container.style.setProperty('--an-nisa-translation-font', px);
      };
      translationSizeRange.addEventListener('input', e => applyTranslationSize(e.target.value));
      applyTranslationSize(translationSizeRange.value);
    }

    if (showTransliterationCheckbox) {
      const applyTranslitVisibility = () => {
        const show = showTransliterationCheckbox.checked;
        container.setAttribute('data-show-translit', show ? '1' : '0');
      };
      showTransliterationCheckbox.addEventListener('change', applyTranslitVisibility);
      applyTranslitVisibility();
    }
  }

  // ------- MAIN INIT -------
  async function init() {
    try {
      loadBookmarks();

      // 1) Fetch teks ayat dari JSON GitHub (Arab + Rumi + Terjemahan)
      const res = await fetch(VERSES_JSON_URL);
      if (!res.ok) throw new Error('Gagal fetch JSON ayat');
      const jsonData = await res.json();
      if (!Array.isArray(jsonData)) throw new Error('Struktur JSON ayat tidak sah');

      // sort ikut number
      versesData = jsonData
        .slice()
        .sort((a, b) => (a.number || 0) - (b.number || 0));

      renderVerses();

      // 2) Fetch audio untuk qari default
      if (qariSelector) {
        await fetchAudioForQari(qariSelector.value || 'mishary');
      } else {
        await fetchAudioForQari('mishary');
      }

      // 3) Init audio player
      initAudio();
      setActiveVerse(0);

      // Listeners
      if (playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
          isAutoPlayChain = true;
          togglePlayPauseMain();
        });
      }

      if (qariSelector) {
        qariSelector.addEventListener('change', () => {
          fetchAudioForQari(qariSelector.value);
        });
      }

      initSettingsPanel();
    } catch (e) {
      console.error(e);
      showToast('Gagal memuatkan Surah An-Nisa. Sila cuba lagi.');
    } finally {
      if (loadingIndicator) loadingIndicator.style.display = 'none';
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
