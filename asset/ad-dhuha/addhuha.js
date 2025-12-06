/**
* Surah Ad-Dhuha Interactive Tool
* Copyright © 2025 ilmualam.com
*
* This code is proprietary and confidential.
* Unauthorized copying, distribution, or modification is strictly prohibited.
* Licensed exclusively for use on ilmualam.com
*
* @author ilmualam.com
* @version 2.1.0
* @license Proprietary
*/
// =====================
// TOOL SURAH AD-DHUHA – AUDIO QURAN CLOUD + AUTO HIGHLIGHT/SCROLL
// =====================

(function () {
const root = document.getElementById('surah-ad-dhuha-tool');
if (!root) return;

const versesContainer = root.querySelector('#verses-container');
const playToggle = root.querySelector('#play-toggle');
const progressBar = root.querySelector('#audio-progress');
const progressFill = root.querySelector('#audio-progress-fill');
const timeDisplay = root.querySelector('#time-display');
const statAyah = root.querySelector('#stat-ayah-count');
const statProgress = root.querySelector('#stat-progress');
const statBookmarks = root.querySelector('#stat-bookmarks');
const controlsPanel = root.querySelector('.controls-panel');
const shareButtons = root.querySelector('.share-buttons');
const audio = root.querySelector('#surah-ad-dhuha-audio'); // <audio> Quran Cloud

// ====== DATA SURAH (11 AYAT) ======
const SURAH_AD_DHUHA = [
{ ayah: 1, arabic: 'وَالضُّحَىٰ', rumi: 'Wad-dhuha', translation: 'Demi waktu Dhuha (pagi yang cerah),' },
{ ayah: 2, arabic: 'وَاللَّيْلِ إِذَا سَجَىٰ', rumi: 'Wal-layli idza saja', translation: 'Dan demi malam apabila ia menjadi sunyi,' },
{ ayah: 3, arabic: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ', rumi: 'Ma wadda‘aka rabbuka wa ma qala', translation: 'Tuhanmu (wahai Muhammad) tidak meninggalkan engkau dan tidak membenci engkau.' },
{ ayah: 4, arabic: 'وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ', rumi: 'Walal-ākhiratu khayrul laka minal-ūlā', translation: 'Dan sesungguhnya hari kemudian (akhirat) adalah lebih baik bagimu daripada permulaan (dunia).' },
{ ayah: 5, arabic: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ', rumi: 'Wa lasawfa yu‘țīka rabbuka fa tarḍā', translation: 'Dan kelak Tuhanmu pasti memberikan kepadamu (segala nikmat), lalu engkau menjadi reda.' },
{ ayah: 6, arabic: 'أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ', rumi: 'Alam yajidka yatīman fa-āwā', translation: 'Bukankah Dia mendapatimu sebagai anak yatim, lalu Dia memberi perlindungan?' },
{ ayah: 7, arabic: 'وَوَجَدَكَ ضَالًّا فَهَدَىٰ', rumi: 'Wa wajadaka ḍāllan fahadā', translation: 'Dan Dia mendapatimu dalam keadaan tidak mengetahui (jalan yang lengkap), lalu Dia memberi petunjuk?' },
{ ayah: 8, arabic: 'وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ', rumi: 'Wa wajadaka ‘āilan fa-aghna', translation: 'Dan Dia mendapatimu dalam keadaan miskin, lalu Dia memberikan kecukupan?' },
{ ayah: 9, arabic: 'فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ', rumi: 'Fa ammāl-yatīma falā taqhar', translation: 'Maka terhadap anak yatim, janganlah kamu berlaku sewenang-wenangnya.' },
{ ayah: 10, arabic: 'وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ', rumi: 'Wa ammās-sā-ila falā tanhar', translation: 'Dan terhadap orang yang meminta-minta, janganlah kamu menghardiknya.' },
{ ayah: 11, arabic: 'وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ', rumi: 'Wa ammā bini‘mati rabbika faḥaddith', translation: 'Dan terhadap nikmat Tuhanmu, maka hendaklah kamu sebar-sebarkan (dengan bersyukur).' }
];

const STORAGE_KEY = 'ilmu_ad_dhuha_state_v1';

function loadState() {
try {
const raw = localStorage.getItem(STORAGE_KEY);
if (!raw) return { completed: [], bookmarks: [] };
const parsed = JSON.parse(raw);
return {
completed: Array.isArray(parsed.completed) ? parsed.completed : [],
bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
};
} catch (e) {
return { completed: [], bookmarks: [] };
}
}

function saveState(state) {
try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

let state = loadState();
let currentAyahIndex = -1; // index dalam array (0–10)

// ====== BUILD VERSES ======
function buildVerses() {
if (!versesContainer) return;

const completedSet = new Set(state.completed || []);
const bookmarkSet = new Set(state.bookmarks || []);
let html = '';

SURAH_AD_DHUHA.forEach(v => {
const isCompleted = completedSet.has(v.ayah);
const isBookmarked = bookmarkSet.has(v.ayah);

html += `
<article class="verse-card" data-ayah="${v.ayah}">
<header class="verse-header">
<div class="verse-number">${v.ayah}</div>
<div class="verse-actions">
<button type="button" class="action-icon action-play" aria-label="Mainkan ayat ${v.ayah}">▶</button>
<button type="button" class="action-icon action-complete ${isCompleted ? 'active' : ''}" aria-label="Tanda ayat ${v.ayah} telah dikuasai">✓</button>
<button type="button" class="action-icon action-bookmark ${isBookmarked ? 'active' : ''}" aria-label="Tanda ayat ${v.ayah} sebagai kegemaran">★</button>
</div>
</header>
<p class="verse-arabic">${v.arabic}</p>
<p class="verse-rumi">${v.rumi}</p>
<p class="verse-translation">${v.translation}</p>
</article>
`;
});

versesContainer.innerHTML = html;
if (statAyah) statAyah.textContent = String(SURAH_AD_DHUHA.length);
updateStats();
}

// ====== AUDIO UTILITY ======
function formatTime(sec) {
if (!isFinite(sec)) return '00:00';
const m = Math.floor(sec / 60);
const s = Math.floor(sec % 60);
return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

function updateTimeAndProgress() {
if (!audio || !progressFill || !timeDisplay) return;
const current = audio.currentTime || 0;
const duration = audio.duration || 0;
const percent = duration ? (current / duration) * 100 : 0;
progressFill.style.width = percent + '%';
timeDisplay.textContent = formatTime(current) + ' / ' + formatTime(duration);

// ====== AUTO AYAT (ANGGARAN BERDASARKAN % AUDIO) ======
if (duration && versesContainer) {
let idx = Math.floor((current / duration) * SURAH_AD_DHUHA.length);
if (idx < 0) idx = 0;
if (idx >= SURAH_AD_DHUHA.length) idx = SURAH_AD_DHUHA.length - 1;

if (idx !== currentAyahIndex) {
currentAyahIndex = idx;
const card = versesContainer.querySelector('.verse-card[data-ayah="' + (idx + 1) + '"]');
if (card) {
setPlayingCard(card, true); // true = scroll
}
}
}
}

// ====== STATS ======
function updateStats() {
const total = SURAH_AD_DHUHA.length;
const completed = (state.completed || []).length;
const bookmarks = (state.bookmarks || []).length;

if (statProgress) {
const pct = total ? Math.round((completed / total) * 100) : 0;
statProgress.textContent = pct + '%';
}
if (statBookmarks) {
statBookmarks.textContent = String(bookmarks);
}
}

function setPlayingCard(card, doScroll) {
if (!versesContainer) return;
const cards = versesContainer.querySelectorAll('.verse-card');
cards.forEach(c => c.classList.remove('playing'));
if (card) {
card.classList.add('playing');
if (doScroll) {
card.scrollIntoView({
behavior: 'smooth',
block: 'center'
});
}
}
}

// ====== VERSE INTERACTION ======
if (versesContainer) {
versesContainer.addEventListener('click', function (e) {
const target = e.target;
const card = target.closest('.verse-card');
if (!card) return;
const ayah = Number(card.getAttribute('data-ayah'));
if (!ayah) return;
const verseIdx = ayah - 1;

// Klik icon PLAY pada ayat
if (target.closest('.action-play')) {
currentAyahIndex = verseIdx;
setPlayingCard(card, true);

if (audio) {
// anggaran posisi audio ikut nisbah ayat
if (audio.duration && isFinite(audio.duration)) {
audio.currentTime = (verseIdx / SURAH_AD_DHUHA.length) * audio.duration;
} else {
audio.currentTime = 0;
}
audio.play().catch(function () {});
}
return;
}

// Klik icon COMPLETE
if (target.closest('.action-complete')) {
const idx = state.completed.indexOf(ayah);
const btn = target.closest('.action-complete');
if (idx === -1) {
state.completed.push(ayah);
btn.classList.add('active');
} else {
state.completed.splice(idx, 1);
btn.classList.remove('active');
}
saveState(state);
updateStats();
return;
}

// Klik icon BOOKMARK
if (target.closest('.action-bookmark')) {
const idxB = state.bookmarks.indexOf(ayah);
const btn = target.closest('.action-bookmark');
if (idxB === -1) {
state.bookmarks.push(ayah);
btn.classList.add('active');
} else {
state.bookmarks.splice(idxB, 1);
btn.classList.remove('active');
}
saveState(state);
updateStats();
return;
}

// Klik mana-mana lokasi lain pada kad ayat → hanya highlight + scroll
if (!target.closest('.action-icon')) {
currentAyahIndex = verseIdx;
setPlayingCard(card, true);
}
});
}

// ====== MODE PAPARAN (Arab / Rumi / Terjemahan / Tadabbur) ======
function applyMode(mode) {
if (!versesContainer) return;
const cards = versesContainer.querySelectorAll('.verse-card');

cards.forEach(card => {
const arabic = card.querySelector('.verse-arabic');
const rumi = card.querySelector('.verse-rumi');
const translation = card.querySelector('.verse-translation');
if (!arabic || !rumi || !translation) return;

let showArabic = true;
let showRumi = true;
let showTranslation = true;

if (mode === 'arabic') {
showArabic = true; showRumi = false; showTranslation = false;
} else if (mode === 'rumi') {
showArabic = false; showRumi = true; showTranslation = false;
} else if (mode === 'translation') {
showArabic = false; showRumi = false; showTranslation = true;
} else if (mode === 'tadabbur') {
showArabic = true; showRumi = false; showTranslation = true;
}

arabic.style.display = showArabic ? 'block' : 'none';
rumi.style.display = showRumi ? 'block' : 'none';
translation.style.display = showTranslation ? 'block' : 'none';
});
}

if (controlsPanel) {
controlsPanel.addEventListener('click', function (e) {
const btn = e.target.closest('.control-btn');
if (!btn) return;

const mode = btn.getAttribute('data-mode');
const allBtns = controlsPanel.querySelectorAll('.control-btn');
allBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');

if (mode === 'all') applyMode('all');
else if (mode === 'arabic') applyMode('arabic');
else if (mode === 'rumi') applyMode('rumi');
else if (mode === 'translation') applyMode('translation');
else if (mode === 'tadabbur') applyMode('tadabbur');
});

const firstBtn = controlsPanel.querySelector('.control-btn[data-mode="all"]');
if (firstBtn) firstBtn.classList.add('active');
}

// ====== DARK MODE ======
if (controlsPanel) {
const darkBtn = controlsPanel.querySelector('[data-toggle="dark"]');
if (darkBtn) {
darkBtn.addEventListener('click', function () {
root.classList.toggle('dark-mode');
});
}
}

// ====== SHARE BUTTONS ======
if (shareButtons) {
shareButtons.addEventListener('click', function (e) {
const btn = e.target.closest('.share-btn');
if (!btn) return;
const type = btn.getAttribute('data-share');
const url = window.location.href.split('#')[0] + '#surah-ad-dhuha-tool';
const text = 'Tool Interaktif Surah Ad-Dhuha di IlmuAlam.com – bacaan Arab, rumi, terjemahan & audio.';

if (type === 'whatsapp') {
window.open('https://wa.me/?text=' + encodeURIComponent(text + ' ' + url), '_blank');
} else if (type === 'telegram') {
window.open('https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '_blank');
} else if (type === 'copy') {
if (navigator.clipboard && navigator.clipboard.writeText) {
navigator.clipboard.writeText(url).catch(function () {});
} else {
const dummy = document.createElement('input');
dummy.value = url;
document.body.appendChild(dummy);
dummy.select();
try { document.execCommand('copy'); } catch (e) {}
document.body.removeChild(dummy);
}
}
});
}

// ====== AUDIO HOOKS (Quran Cloud) ======
if (audio) {
audio.addEventListener('error', function () {
if (timeDisplay) timeDisplay.textContent = 'Audio gagal dimuat';
if (playToggle) playToggle.disabled = true;
console.warn('Ralat audio Surah Ad-Dhuha:', audio.error);
});

audio.addEventListener('play', function () {
if (playToggle) playToggle.textContent = '⏸';
});

audio.addEventListener('pause', function () {
if (playToggle) playToggle.textContent = '▶';
});

audio.addEventListener('timeupdate', updateTimeAndProgress);
audio.addEventListener('loadedmetadata', updateTimeAndProgress);

if (playToggle) {
playToggle.addEventListener('click', function () {
if (!audio.src) return;

// Kalau belum ada ayat playing, start dari ayat 1
if (currentAyahIndex === -1 && versesContainer) {
currentAyahIndex = 0;
const firstCard = versesContainer.querySelector('.verse-card[data-ayah="1"]');
if (firstCard) setPlayingCard(firstCard, true);
}

if (audio.paused) {
audio.play().catch(function () {});
} else {
audio.pause();
}
});
}

if (progressBar) {
progressBar.addEventListener('click', function (e) {
if (!audio.duration) return;
const rect = progressBar.getBoundingClientRect();
const clickX = e.clientX - rect.left;
const ratio = Math.min(Math.max(clickX / rect.width, 0), 1);
audio.currentTime = audio.duration * ratio;
updateTimeAndProgress();
});
}
} else {
if (playToggle) playToggle.disabled = true;
}

// ====== INIT ======
buildVerses();
applyMode('all');
updateTimeAndProgress();

})();
