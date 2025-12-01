/**
 * Surah Yunus Interactive Tool (Malay Version) for Ilmualam.com
 * Version: 2.0.0 (Grandmaster Edition)
 * Author: Gemini SEO Alchemist
 * License: MIT
 */

document.addEventListener('DOMContentLoaded', () => {
    const SURAH_ID = 10; // Surah Yunus
    const API_BASE = 'https://api.alquran.cloud/v1/surah';
    
    // State Management
    let state = {
        data: null,
        isPlaying: false,
        currentAyahIndex: 0,
        bookmarks: JSON.parse(localStorage.getItem('ilm_bookmarks_yunus')) || [],
        fontSize: 26, // Saiz font selesa untuk mobile
        showTrans: true,
        showRumi: true
    };

    // Story Navigation Points (Ilm-Jelajah)
    const storyPoints = [
        { label: "Mula", ayah: 1 },
        { label: "Kisah Nuh AS", ayah: 71 },
        { label: "Musa & Firaun", ayah: 75 },
        { label: "Kaum Yunus", ayah: 98 }
    ];

    const container = document.getElementById('ilm-app-container');
    const audioPlayer = new Audio();

    // Init
    async function init() {
        container.innerHTML = `<div class="ilm-loader"><div class="ilm-spinner"></div><p>Memuatkan Surah Yunus...</p></div>`;
        
        try {
            // Fetch: Arab, Rumi, Malay, Audio
            const response = await fetch(`${API_BASE}/${SURAH_ID}/editions/quran-uthmani,en.transliteration,ms.basmeih,ar.alafasy`);
            const json = await response.json();

            // Structure Data
            const arabicData = json.data[0].ayahs;
            const rumiData = json.data[1].ayahs;
            const malayData = json.data[2].ayahs;
            const audioData = json.data[3].ayahs;

            state.data = arabicData.map((item, i) => ({
                number: item.numberInSurah,
                text: item.text,
                rumi: rumiData[i].text,
                trans: malayData[i].text,
                audio: audioData[i].audio
            }));

            renderUI();
            setupEvents();
            checkDeepLink();

        } catch (err) {
            console.error(err);
            container.innerHTML = `<div class="ilm-error">Gagal memuatkan data. Sila refresh halaman.</div>`;
        }
    }

    function renderUI() {
        const navButtons = storyPoints.map(p => 
            `<button class="ilm-nav-pill" data-target="${p.ayah}">${p.label}</button>`
        ).join('');

        container.innerHTML = `
            <div class="ilm-header-sticky">
                <div class="ilm-story-nav">${navButtons}</div>
                <div class="ilm-toolbar">
                    <div class="ilm-toggles">
                        <label><input type="checkbox" id="toggle-rumi" checked> Rumi</label>
                        <label><input type="checkbox" id="toggle-trans" checked> Terjemahan</label>
                    </div>
                    <div class="ilm-font-resizer">
                        <button id="font-dec">A-</button>
                        <button id="font-inc">A+</button>
                    </div>
                </div>
            </div>

            <div id="ilm-content-area" class="ilm-content-area"></div>

            <div class="ilm-player-bar">
                <div class="ilm-player-status">
                    <span id="player-status-text">Ayat 1</span>
                </div>
                <div class="ilm-player-controls">
                    <button id="btn-prev" class="ilm-ctrl">⏮</button>
                    <button id="btn-play" class="ilm-play-main">▶</button>
                    <button id="btn-next" class="ilm-ctrl">⏭</button>
                </div>
            </div>
        `;

        // Render List (Chunked for performance)
        renderVerses();
    }

    function renderVerses() {
        const list = document.getElementById('ilm-content-area');
        const fragment = document.createDocumentFragment();

        state.data.forEach((ayah, index) => {
            const div = document.createElement('div');
            div.className = 'ilm-ayah-box';
            div.id = `ayah-${ayah.number}`;
            div.dataset.index = index;
            
            const isBookmarked = state.bookmarks.includes(ayah.number);

            div.innerHTML = `
                <div class="ilm-ayah-top">
                    <span class="ilm-number">${ayah.number}</span>
                    <div class="ilm-tools">
                        <button class="ilm-tool-btn btn-copy" title="Salin">📋</button>
                        <button class="ilm-tool-btn btn-share" title="Kongsi">🔗</button>
                        <button class="ilm-tool-btn btn-bookmark ${isBookmarked ? 'active' : ''}" title="Tanda">🔖</button>
                    </div>
                </div>
                <p class="ilm-txt-arabic" style="font-size: ${state.fontSize}px">${ayah.text}</p>
                <p class="ilm-txt-rumi ${state.showRumi ? '' : 'hidden'}">${ayah.rumi}</p>
                <p class="ilm-txt-trans ${state.showTrans ? '' : 'hidden'}">${ayah.trans}</p>
            `;
            fragment.appendChild(div);
        });

        list.appendChild(fragment);
    }

    function setupEvents() {
        // Audio Events
        const playBtn = document.getElementById('btn-play');
        const statusText = document.getElementById('player-status-text');

        audioPlayer.onended = () => {
            if (state.currentAyahIndex < state.data.length - 1) {
                playAyah(state.currentAyahIndex + 1);
            } else {
                state.isPlaying = false;
                playBtn.textContent = "▶";
            }
        };

        playBtn.onclick = () => {
            if (state.isPlaying) {
                audioPlayer.pause();
                state.isPlaying = false;
                playBtn.textContent = "▶";
            } else {
                playAyah(state.currentAyahIndex);
            }
        };

        document.getElementById('btn-prev').onclick = () => playAyah(state.currentAyahIndex - 1);
        document.getElementById('btn-next').onclick = () => playAyah(state.currentAyahIndex + 1);

        // Story Nav
        document.querySelectorAll('.ilm-nav-pill').forEach(btn => {
            btn.onclick = () => {
                const target = parseInt(btn.dataset.target);
                scrollToAyah(target - 1); // index is number - 1
            };
        });

        // Font & Toggles
        document.getElementById('font-inc').onclick = () => changeFont(2);
        document.getElementById('font-dec').onclick = () => changeFont(-2);
        
        document.getElementById('toggle-rumi').onchange = (e) => {
            state.showRumi = e.target.checked;
            document.querySelectorAll('.ilm-txt-rumi').forEach(el => el.classList.toggle('hidden', !state.showRumi));
        };
        document.getElementById('toggle-trans').onchange = (e) => {
            state.showTrans = e.target.checked;
            document.querySelectorAll('.ilm-txt-trans').forEach(el => el.classList.toggle('hidden', !state.showTrans));
        };

        // Delegated Events (Copy, Share, Bookmark)
        document.getElementById('ilm-content-area').addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            const box = e.target.closest('.ilm-ayah-box');
            if (!btn || !box) return;

            const idx = parseInt(box.dataset.index);
            const ayah = state.data[idx];

            if (btn.classList.contains('btn-copy')) {
                const text = `${ayah.text}\n\n${ayah.trans} (Surah Yunus: ${ayah.number})`;
                navigator.clipboard.writeText(text);
                alert("Ayat disalin!");
            } else if (btn.classList.contains('btn-bookmark')) {
                toggleBookmark(ayah.number, btn);
            } else if (btn.classList.contains('btn-share')) {
                const url = `${window.location.href.split('?')[0]}?ayat=${ayah.number}`;
                if (navigator.share) {
                    navigator.share({ title: 'Surah Yunus', text: ayah.trans, url: url });
                } else {
                    navigator.clipboard.writeText(url);
                    alert("Pautan disalin!");
                }
            }
        });
    }

    function playAyah(index) {
        if (index < 0 || index >= state.data.length) return;
        
        // Reset old active
        document.querySelectorAll('.ilm-ayah-box').forEach(b => b.classList.remove('active'));

        state.currentAyahIndex = index;
        const ayah = state.data[index];
        const box = document.getElementById(`ayah-${ayah.number}`);

        if (box) {
            box.classList.add('active');
            box.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        audioPlayer.src = ayah.audio;
        audioPlayer.play();
        state.isPlaying = true;
        
        document.getElementById('btn-play').textContent = "⏸";
        document.getElementById('player-status-text').textContent = `Ayat ${ayah.number}`;
    }

    function scrollToAyah(index) {
        const ayah = state.data[index];
        const box = document.getElementById(`ayah-${ayah.number}`);
        if(box) box.scrollIntoView({ behavior: 'smooth', block: 'start' });
        playAyah(index);
    }

    function changeFont(delta) {
        state.fontSize += delta;
        document.querySelectorAll('.ilm-txt-arabic').forEach(el => el.style.fontSize = `${state.fontSize}px`);
    }

    function toggleBookmark(num, btn) {
        const i = state.bookmarks.indexOf(num);
        if (i === -1) {
            state.bookmarks.push(num);
            btn.classList.add('active');
        } else {
            state.bookmarks.splice(i, 1);
            btn.classList.remove('active');
        }
        localStorage.setItem('ilm_bookmarks_yunus', JSON.stringify(state.bookmarks));
    }

    function checkDeepLink() {
        const params = new URLSearchParams(window.location.search);
        const ayat = params.get('ayat');
        if (ayat) {
            setTimeout(() => {
                const idx = parseInt(ayat) - 1;
                if (state.data[idx]) scrollToAyah(idx);
            }, 1000);
        }
    }

    init();
});
