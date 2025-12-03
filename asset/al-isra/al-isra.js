/**
 * Surah Al-Isra Interactive Reader Tool
 * Version: 1.0.0
 * Copyright (c) 2024 IlmuAlam.com
 * Licensed under MIT License
 * 
 * Features:
 * - Arabic text with audio playback
 * - Audio sync with ayah highlighting
 * - Rumi transliteration
 * - Malay translation
 * - Bookmark functionality
 * - Share per ayah
 * - Copy ayah text
 * - Play/Stop controls
 * - Mobile-first responsive design
 * 
 * Host this file on GitHub and inject into your HTML with domain: ilmualam.com
 */

(function() {
  'use strict';
  
  const SURAH_NUMBER = 17;
  const SURAH_NAME = 'Al-Isra';
  const DOMAIN = 'https://ilmualam.com';
  
  // SEO Keywords injection
  const SEO_KEYWORDS = {
    primary: ['surah al isra rumi', 'surah al isra', 'surah bani israil', 'bacaan surah al isra'],
    secondary: ['terjemahan surah al isra', 'tafsir al isra', 'kelebihan surah al isra', 'ayat al isra'],
    longtail: ['surah al isra rumi dan terjemahan', 'bacaan rumi surah al isra', 'maksud surah al isra']
  };
  
  // State management
  const state = {
    currentAyah: 0,
    isPlaying: false,
    audioElement: null,
    surahData: null,
    bookmarks: JSON.parse(localStorage.getItem('surah-al-isra-bookmarks') || '[]')
  };
  
  // API endpoints
  const API = {
    arabic: `https://api.alquran.cloud/v1/surah/${SURAH_NUMBER}`,
    translation: `https://api.alquran.cloud/v1/surah/${SURAH_NUMBER}/ms.basmeih`,
    audio: `https://api.alquran.cloud/v1/surah/${SURAH_NUMBER}/ar.alafasy`
  };
  
  // Initialize
  async function init() {
    try {
      showLoader();
      await fetchSurahData();
      renderReader();
      attachEventListeners();
      hideLoader();
      injectSEOKeywords();
    } catch (error) {
      console.error('Error initializing Surah reader:', error);
      showError('Maaf, terdapat masalah memuatkan data. Sila refresh halaman.');
    }
  }
  
  // Fetch all Surah data
  async function fetchSurahData() {
    const [arabicRes, translationRes, audioRes] = await Promise.all([
      fetch(API.arabic),
      fetch(API.translation),
      fetch(API.audio)
    ]);
    
    const arabic = await arabicRes.json();
    const translation = await translationRes.json();
    const audio = await audioRes.json();
    
    state.surahData = {
      arabic: arabic.data.ayahs,
      translation: translation.data.ayahs,
      audio: audio.data.ayahs,
      meta: arabic.data
    };
  }
  
  // Render the reader interface
  function renderReader() {
    const container = document.getElementById('surah-reader-tool');
    if (!container) return;
    
    container.innerHTML = `
      <div class="ilmu-reader-header">
        <div class="ilmu-reader-title">
          <h2>${SURAH_NAME} (${state.surahData.meta.englishName})</h2>
          <p>${state.surahData.meta.numberOfAyahs} Ayat | ${state.surahData.meta.revelationType === 'Meccan' ? 'Makkiyyah' : 'Madaniyyah'}</p>
        </div>
      </div>
      
      <div class="ilmu-reader-controls">
        <button id="play-all-btn" class="ilmu-btn ilmu-btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Main Semua
        </button>
        <button id="stop-btn" class="ilmu-btn ilmu-btn-secondary" style="display:none;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="6" y="6" width="12" height="12"></rect>
          </svg>
          Berhenti
        </button>
        <button id="show-bookmarks-btn" class="ilmu-btn ilmu-btn-outline">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          Bookmark (${state.bookmarks.length})
        </button>
      </div>
      
      <div id="ayah-container" class="ilmu-ayah-container"></div>
      
      <audio id="audio-player" preload="metadata"></audio>
    `;
    
    renderAyahs();
  }
  
  // Render all ayahs
  function renderAyahs() {
    const container = document.getElementById('ayah-container');
    const ayahsHTML = state.surahData.arabic.map((ayah, index) => {
      const isBookmarked = state.bookmarks.includes(index + 1);
      return createAyahCard(ayah, index, isBookmarked);
    }).join('');
    
    container.innerHTML = ayahsHTML;
  }
  
  // Create individual ayah card
  function createAyahCard(ayah, index, isBookmarked) {
    const translation = state.surahData.translation[index];
    const audioUrl = state.surahData.audio[index].audio;
    const ayahNumber = index + 1;
    
    // Generate rumi transliteration (simplified)
    const rumi = generateRumi(ayah.text);
    
    return `
      <div class="ilmu-ayah-card" id="ayah-${ayahNumber}" data-ayah="${ayahNumber}">
        <div class="ilmu-ayah-header">
          <span class="ilmu-ayah-number">${ayahNumber}</span>
          <div class="ilmu-ayah-actions">
            <button class="ilmu-icon-btn" onclick="window.surahReader.playAyah(${index})" title="Main Ayat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <button class="ilmu-icon-btn ${isBookmarked ? 'active' : ''}" onclick="window.surahReader.toggleBookmark(${ayahNumber})" title="Bookmark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
            <button class="ilmu-icon-btn" onclick="window.surahReader.copyAyah(${ayahNumber})" title="Salin">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
            <button class="ilmu-icon-btn" onclick="window.surahReader.shareAyah(${ayahNumber})" title="Kongsi">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="ilmu-ayah-arabic">${ayah.text}</div>
        
        <div class="ilmu-ayah-rumi">${rumi}</div>
        
        <div class="ilmu-ayah-translation">
          <strong>Terjemahan:</strong> ${translation.text}
        </div>
        
        <audio data-ayah="${ayahNumber}" src="${audioUrl}" preload="none"></audio>
      </div>
    `;
  }
  
  // Generate simplified rumi transliteration
  function generateRumi(arabicText) {
    // This is a simplified rumi converter
    // For production, use a proper Arabic to Rumi API
    const rumiMap = {
      'ا': 'a', 'أ': 'a', 'إ': 'i', 'آ': 'aa',
      'ب': 'b', 'ت': 't', 'ث': 'ts', 'ج': 'j',
      'ح': 'h', 'خ': 'kh', 'د': 'd', 'ذ': 'dz',
      'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sy',
      'ص': 'sh', 'ض': 'dh', 'ط': 'th', 'ظ': 'zh',
      'ع': "'", 'غ': 'gh', 'ف': 'f', 'ق': 'q',
      'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n',
      'ه': 'h', 'و': 'w', 'ي': 'y', 'ى': 'a',
      'ة': 'h', 'ء': "'", 'ئ': "'", 'ؤ': "'",
      'َ': 'a', 'ُ': 'u', 'ِ': 'i', 'ْ': '',
      'ّ': '', 'ً': 'an', 'ٌ': 'un', 'ٍ': 'in'
    };
    
    let rumi = '';
    for (let char of arabicText) {
      rumi += rumiMap[char] || char;
    }
    
    return rumi.trim();
  }
  
  // Play specific ayah
  function playAyah(index) {
    stopAudio();
    state.currentAyah = index;
    const ayahCard = document.querySelector(`[data-ayah="${index + 1}"]`);
    const audioEl = ayahCard.querySelector('audio');
    
    highlightAyah(index + 1);
    scrollToAyah(index + 1);
    
    audioEl.play();
    state.isPlaying = true;
    updatePlayButton(true);
    
    audioEl.onended = () => {
      if (index < state.surahData.arabic.length - 1) {
        playAyah(index + 1);
      } else {
        stopAudio();
      }
    };
  }
  
  // Play all ayahs
  function playAll() {
    playAyah(0);
  }
  
  // Stop audio
  function stopAudio() {
    const allAudios = document.querySelectorAll('.ilmu-ayah-card audio');
    allAudios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
    
    removeAllHighlights();
    state.isPlaying = false;
    updatePlayButton(false);
  }
  
  // Highlight current ayah
  function highlightAyah(ayahNumber) {
    removeAllHighlights();
    const ayahCard = document.getElementById(`ayah-${ayahNumber}`);
    if (ayahCard) {
      ayahCard.classList.add('ilmu-ayah-playing');
    }
  }
  
  // Remove all highlights
  function removeAllHighlights() {
    document.querySelectorAll('.ilmu-ayah-playing').forEach(el => {
      el.classList.remove('ilmu-ayah-playing');
    });
  }
  
  // Scroll to ayah
  function scrollToAyah(ayahNumber) {
    const ayahCard = document.getElementById(`ayah-${ayahNumber}`);
    if (ayahCard) {
      ayahCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  
  // Toggle bookmark
  function toggleBookmark(ayahNumber) {
    const index = state.bookmarks.indexOf(ayahNumber);
    if (index > -1) {
      state.bookmarks.splice(index, 1);
    } else {
      state.bookmarks.push(ayahNumber);
    }
    
    localStorage.setItem('surah-al-isra-bookmarks', JSON.stringify(state.bookmarks));
    renderReader();
    showToast(`Ayat ${ayahNumber} ${index > -1 ? 'dibuang dari' : 'ditambah ke'} bookmark`);
  }
  
  // Copy ayah text
  async function copyAyah(ayahNumber) {
    const ayah = state.surahData.arabic[ayahNumber - 1];
    const translation = state.surahData.translation[ayahNumber - 1];
    
    const text = `${SURAH_NAME} Ayat ${ayahNumber}

${ayah.text}

Terjemahan:
${translation.text}

Sumber: ${DOMAIN}/surah-al-isra`;
    
    try {
      await navigator.clipboard.writeText(text);
      showToast('Ayat berjaya disalin!');
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast('Ayat berjaya disalin!');
    }
  }
  
  // Share ayah
  async function shareAyah(ayahNumber) {
    const ayah = state.surahData.arabic[ayahNumber - 1];
    const translation = state.surahData.translation[ayahNumber - 1];
    
    const shareData = {
      title: `${SURAH_NAME} Ayat ${ayahNumber}`,
      text: `${ayah.text}

${translation.text}`,
      url: `${DOMAIN}/surah-al-isra#ayah-${ayahNumber}`
    };
    
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          fallbackShare(shareData);
        }
      }
    } else {
      fallbackShare(shareData);
    }
  }
  
  // Fallback share method
  function fallbackShare(shareData) {
    const url = encodeURIComponent(shareData.url);
    const text = encodeURIComponent(shareData.text);
    
    const shareOptions = `
      <div class="ilmu-share-modal">
        <div class="ilmu-share-content">
          <h3>Kongsi Ayat</h3>
          <div class="ilmu-share-buttons">
            <a href="https://api.whatsapp.com/send?text=${text}%20${url}" target="_blank" class="ilmu-share-btn ilmu-share-whatsapp">
              WhatsApp
            </a>
            <a href="https://t.me/share/url?url=${url}&text=${text}" target="_blank" class="ilmu-share-btn ilmu-share-telegram">
              Telegram
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" class="ilmu-share-btn ilmu-share-facebook">
              Facebook
            </a>
            <a href="https://twitter.com/intent/tweet?text=${text}&url=${url}" target="_blank" class="ilmu-share-btn ilmu-share-twitter">
              Twitter
            </a>
          </div>
          <button onclick="this.parentElement.parentElement.remove()" class="ilmu-btn ilmu-btn-secondary" style="margin-top:16px;">Tutup</button>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', shareOptions);
  }
  
  // Update play button state
  function updatePlayButton(isPlaying) {
    const playBtn = document.getElementById('play-all-btn');
    const stopBtn = document.getElementById('stop-btn');
    
    if (isPlaying) {
      playBtn.style.display = 'none';
      stopBtn.style.display = 'inline-flex';
    } else {
      playBtn.style.display = 'inline-flex';
      stopBtn.style.display = 'none';
    }
  }
  
  // Show toast notification
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'ilmu-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
  
  // Show loader
  function showLoader() {
    const loader = document.createElement('div');
    loader.id = 'ilmu-loader';
    loader.className = 'ilmu-loader';
    loader.innerHTML = '<div class="ilmu-spinner"></div><p>Memuatkan Surah Al-Isra...</p>';
    document.getElementById('surah-reader-tool')?.appendChild(loader);
  }
  
  // Hide loader
  function hideLoader() {
    document.getElementById('ilmu-loader')?.remove();
  }
  
  // Show error
  function showError(message) {
    const container = document.getElementById('surah-reader-tool');
    if (container) {
      container.innerHTML = `<div class="ilmu-error">${message}</div>`;
    }
  }
  
  // Attach event listeners
  function attachEventListeners() {
    document.getElementById('play-all-btn')?.addEventListener('click', playAll);
    document.getElementById('stop-btn')?.addEventListener('click', stopAudio);
    document.getElementById('show-bookmarks-btn')?.addEventListener('click', showBookmarks);
  }
  
  // Show bookmarks
  function showBookmarks() {
    if (state.bookmarks.length === 0) {
      showToast('Tiada bookmark disimpan');
      return;
    }
    
    const bookmarkList = state.bookmarks.map(num => {
      return `<li><a href="#ayah-${num}" onclick="window.surahReader.scrollToAyah(${num})">Ayat ${num}</a></li>`;
    }).join('');
    
    const modal = `
      <div class="ilmu-modal">
        <div class="ilmu-modal-content">
          <h3>Bookmark Tersimpan</h3>
          <ul class="ilmu-bookmark-list">${bookmarkList}</ul>
          <button onclick="this.parentElement.parentElement.remove()" class="ilmu-btn ilmu-btn-secondary">Tutup</button>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modal);
  }
  
  // Inject SEO keywords into page
  function injectSEOKeywords() {
    const keywordMeta = document.createElement('meta');
    keywordMeta.name = 'keywords';
    keywordMeta.content = [
      ...SEO_KEYWORDS.primary,
      ...SEO_KEYWORDS.secondary,
      ...SEO_KEYWORDS.longtail
    ].join(', ');
    document.head.appendChild(keywordMeta);
  }
  
  // Export functions to global scope
  window.surahReader = {
    playAyah,
    toggleBookmark,
    copyAyah,
    shareAyah,
    scrollToAyah
  };
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
