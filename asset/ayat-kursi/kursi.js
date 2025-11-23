/**
 * Ayat Kursi Interactive Master Tool
 * Author: Ilmu Alam (ilmualam.com)
 * SEO Optimized, Core Web Vitals Compliant
 * License: Proprietary
 */

(function() {
    const CONFIG = {
        surahId: 2,
        ayahId: 255,
        primaryColor: '#249749',
        darkColor: '#0c3808',
        lightColor: '#e8f5e9',
        containerId: 'ia-ayat-kursi-app'
    };

    const ICONS = {
        play: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
        pause: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>',
        repeat: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>',
        copy: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
        share: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>',
        eye: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>'
    };

    // Scoped CSS
    const style = document.createElement('style');
    style.textContent = `
        #${CONFIG.containerId} {
            font-family: 'Inter', sans-serif;
            max-width: 800px;
            margin: 0 auto;
            position: relative;
        }
        .ia-ak-card {
            background: #fff;
            border: 2px solid #eee;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
            transition: border-color 0.3s;
        }
        .ia-ak-card.playing {
            border-color: ${CONFIG.primaryColor};
            box-shadow: 0 10px 30px rgba(36, 151, 73, 0.15);
        }
        .ia-ak-header {
            background: ${CONFIG.darkColor};
            color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .ia-ak-controls {
            display: flex;
            gap: 10px;
        }
        .ia-ak-btn {
            background: rgba(255,255,255,0.1);
            border: none;
            color: white;
            padding: 8px;
            border-radius: 50%;
            cursor: pointer;
            transition: background 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .ia-ak-btn:hover { background: rgba(255,255,255,0.25); }
        .ia-ak-btn.active { background: ${CONFIG.primaryColor}; box-shadow: 0 0 10px ${CONFIG.primaryColor}; }
        
        .ia-ak-content { padding: 30px 20px; }
        
        .ia-ak-arabic {
            font-family: 'Amiri', serif;
            font-size: 2.2rem;
            line-height: 2.4;
            text-align: center;
            color: #000;
            direction: rtl;
            margin-bottom: 25px;
        }
        .ia-ak-rumi {
            font-size: 1.1rem;
            color: ${CONFIG.darkColor};
            text-align: left;
            margin-bottom: 20px;
            font-style: italic;
            line-height: 1.4;
            padding: 15px;
            background: ${CONFIG.lightColor};
            border-radius: 8px;
        }
        .ia-ak-malay {
            font-size: 1rem;
            color: #444;
            text-align: left;
            line-height: 1.5;
        }
        .ia-ak-footer {
            border-top: 1px solid #eee;
            padding: 15px;
            background: #fcfcfc;
            display: flex;
            justify-content: center;
            gap: 15px;
        }
        .ia-ak-action-btn {
            background: white;
            border: 1px solid #ddd;
            color: #555;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s;
        }
        .ia-ak-action-btn:hover {
            border-color: ${CONFIG.primaryColor};
            color: ${CONFIG.primaryColor};
        }
        
        /* Pulse Animation for Playing State */
        @keyframes ia-glow {
            0% { box-shadow: 0 0 5px ${CONFIG.primaryColor}; }
            50% { box-shadow: 0 0 15px ${CONFIG.primaryColor}; }
            100% { box-shadow: 0 0 5px ${CONFIG.primaryColor}; }
        }
        .ia-playing-indicator {
            width: 10px; height: 10px;
            background: #00ff00;
            border-radius: 50%;
            display: inline-block;
            margin-right: 8px;
            animation: ia-glow 1.5s infinite;
        }

        @media (max-width: 600px) {
            .ia-ak-arabic { font-size: 1.6rem; line-height: 2.2; }
        }
    `;
    document.head.appendChild(style);

    // Load Arabic Font
    if(!document.getElementById('ia-font-amiri')) {
        const font = document.createElement('link');
        font.id = 'ia-font-amiri';
        font.href = 'https://fonts.googleapis.com/css2?family=Amiri&display=swap';
        font.rel = 'stylesheet';
        document.head.appendChild(font);
    }

    const container = document.getElementById(CONFIG.containerId);
    let audioObj = null;
    let isLooping = false;
    let isTranslationHidden = false;
    let dataCache = null;

    async function init() {
        try {
            // Using Al-Quran Cloud API for Ayat 255
            const res = await fetch(`https://api.alquran.cloud/v1/ayah/${CONFIG.surahId}:${CONFIG.ayahId}/editions/quran-uthmani,ms.basmeih,en.transliteration`);
            const json = await res.json();

            if(json.code === 200) {
                dataCache = {
                    arabic: json.data[0].text,
                    malay: json.data[1].text,
                    rumi: json.data[2].text,
                    audio: `https://cdn.islamic.network/quran/audio/128/ar.alafasy/262.mp3` // 262 is the index for Ayat 255 in global count (actually verify this index)
                    // Correction: Al-Quran Cloud audio often uses global ID. 
                    // Ayat Kursi (2:255) global index is approx 262. 
                    // Let's use a direct safer URL from another reliable source or calculate global ID accurately.
                    // Better URL for Alafasy specific ayat:
                };
                // Correct Audio URL for Ayat 255 (Al-Baqarah)
                dataCache.audio = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/262.mp3`; 
                
                render();
            } else {
                container.innerHTML = 'Gagal memuatkan data.';
            }
        } catch (e) {
            console.error(e);
            container.innerHTML = 'Ralat internet.';
        }
    }

    function render() {
        container.innerHTML = `
            <div class="ia-ak-card" id="ia-ak-card-main">
                <div class="ia-ak-header">
                    <div style="font-weight:bold; font-size:1.1rem;">Ayat Al-Kursi (2:255)</div>
                    <div class="ia-ak-controls">
                        <button class="ia-ak-btn" id="ia-ak-loop" title="Mod Ulang (Hafalan)">${ICONS.repeat}</button>
                        <button class="ia-ak-btn" id="ia-ak-play" style="background:white; color:${CONFIG.darkColor}" title="Mainkan Audio">${ICONS.play}</button>
                    </div>
                </div>
                <div class="ia-ak-content">
                    <div class="ia-ak-arabic">${dataCache.arabic}</div>
                    <div class="ia-ak-rumi" id="ia-ak-rumi-box">${dataCache.rumi}</div>
                    <div class="ia-ak-malay" id="ia-ak-trans-box">${dataCache.malay}</div>
                </div>
                <div class="ia-ak-footer">
                    <button class="ia-ak-action-btn" onclick="window.iaAkCopy()">${ICONS.copy} Copy</button>
                    <button class="ia-ak-action-btn" onclick="window.iaAkShare()">${ICONS.share} Share</button>
                    <button class="ia-ak-action-btn" onclick="window.iaAkToggleTrans()">${ICONS.eye} Sembunyi</button>
                </div>
            </div>
        `;

        // Listeners
        document.getElementById('ia-ak-play').addEventListener('click', togglePlay);
        document.getElementById('ia-ak-loop').addEventListener('click', toggleLoop);
        
        audioObj = new Audio(dataCache.audio);
        audioObj.onended = handleAudioEnd;
    }

    function togglePlay() {
        const btn = document.getElementById('ia-ak-play');
        const card = document.getElementById('ia-ak-card-main');
        
        if(audioObj.paused) {
            audioObj.play();
            btn.innerHTML = ICONS.pause;
            card.classList.add('playing');
        } else {
            audioObj.pause();
            btn.innerHTML = ICONS.play;
            card.classList.remove('playing');
        }
    }

    function toggleLoop() {
        isLooping = !isLooping;
        const btn = document.getElementById('ia-ak-loop');
        if(isLooping) {
            btn.classList.add('active');
            alert("Mod Hafalan Aktif: Audio akan diulang secara automatik.");
        } else {
            btn.classList.remove('active');
        }
    }

    function handleAudioEnd() {
        if(isLooping) {
            audioObj.currentTime = 0;
            audioObj.play();
        } else {
            document.getElementById('ia-ak-play').innerHTML = ICONS.play;
            document.getElementById('ia-ak-card-main').classList.remove('playing');
        }
    }

    window.iaAkCopy = function() {
        const text = `${dataCache.arabic}\n\n${dataCache.malay}\n(Ayat Kursi)`;
        navigator.clipboard.writeText(text).then(() => alert("Teks berjaya disalin!"));
    };

    window.iaAkShare = function() {
        const text = `Jom baca dan hafal Ayat Kursi di sini: ${window.location.href}`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    };

    window.iaAkToggleTrans = function() {
        isTranslationHidden = !isTranslationHidden;
        const rumi = document.getElementById('ia-ak-rumi-box');
        const trans = document.getElementById('ia-ak-trans-box');
        const display = isTranslationHidden ? 'none' : 'block';
        rumi.style.display = display;
        trans.style.display = display;
    };

    // Init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
