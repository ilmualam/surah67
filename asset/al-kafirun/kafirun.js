/**
 * Surah Al Kafirun Interactive Player & Hafazan Tool
 * Copyright (c) 2025 Ilmu Alam (www.ilmualam.com)
 * 
 * Domain Authorization: www.ilmualam.com
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 * 
 * @version 1.0.0
 * @author Ilmu Alam Team
 * @license Proprietary - All Rights Reserved
 */

(function() {
    'use strict';
    
    // Domain Protection & Copyright Notice
    const AUTHORIZED_DOMAIN = 'ilmualam.com';
    const COPYRIGHT_HASH = 'SWxtdUFsYW0yMDI1QWxLYWZpcnVu'; // Base64 encoded copyright identifier
    
    /**
     * Domain Verification System
     * Ensures script only runs on authorized domain
     */
    function verifyDomain() {
        const currentDomain = window.location.hostname.replace('www.', '');
        
        if (!currentDomain.includes(AUTHORIZED_DOMAIN)) {
            console.warn('%c⚠️ UNAUTHORIZED DOMAIN', 'color: red; font-size: 16px; font-weight: bold;');
            console.warn('%cThis script is licensed exclusively for www.ilmualam.com', 'color: red; font-size: 12px;');
            console.warn('%cCopyright © 2025 Ilmu Alam. All Rights Reserved.', 'color: red; font-size: 12px;');
            
            // Disable functionality on unauthorized domains
            return false;
        }
        return true;
    }
    
    /**
     * Anti-Tampering Protection
     * Prevents unauthorized modifications
     */
    function initProtection() {
        // Disable right-click on player elements
        const protectedElements = document.querySelectorAll('.audio-player-container, .hafazan-container');
        protectedElements.forEach(element => {
            element.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                return false;
            });
        });
        
        // Console copyright notice
        console.log('%c🕌 Surah Al Kafirun Interactive Tool', 'color: #667eea; font-size: 18px; font-weight: bold;');
        console.log('%c© 2025 Ilmu Alam (www.ilmualam.com)', 'color: #764ba2; font-size: 14px;');
        console.log('%cDeveloped with ❤️ for Islamic education', 'color: #11998e; font-size: 12px;');
        console.log('%c' + atob(COPYRIGHT_HASH), 'color: #999; font-size: 10px;');
    }
    
    // Verify domain before initialization
    if (!verifyDomain()) {
        return; // Stop execution on unauthorized domains
    }
    
    // Initialize protection
    initProtection();
    
    /**
     * Surah Al Kafirun Audio Configuration
     * Using EveryAyah.com CDN - Public domain recitation
     */
    const SURAH_CONFIG = {
        surahNumber: 109,
        totalAyat: 6,
        reciter: 'Abdul_Basit_Murattal_192kbps', // High quality reciter
        audioBaseUrl: 'https://everyayah.com/data/',
        ayatUrls: []
    };
    
    /**
     * Generate Audio URLs for each ayat
     */
    function generateAudioUrls() {
        for (let i = 1; i <= SURAH_CONFIG.totalAyat; i++) {
            const paddedSurah = String(SURAH_CONFIG.surahNumber).padStart(3, '0');
            const paddedAyat = String(i).padStart(3, '0');
            const url = `${SURAH_CONFIG.audioBaseUrl}${SURAH_CONFIG.reciter}/${paddedSurah}${paddedAyat}.mp3`;
            SURAH_CONFIG.ayatUrls.push(url);
        }
    }
    
    generateAudioUrls();
    
    /**
     * Player State Management
     */
    const playerState = {
        currentAyat: 0,
        isPlaying: false,
        isLooping: false,
        playbackSpeed: 1.0,
        audioElement: null
    };
    
    /**
     * Hafazan Tracker State
     */
    const hafazanState = {
        masteredVerses: JSON.parse(localStorage.getItem('surah109_mastered') || '[]'),
        lastPracticeDate: localStorage.getItem('surah109_lastPractice') || null,
        streakDays: parseInt(localStorage.getItem('surah109_streak') || '0')
    };
    
    /**
     * Initialize Audio Player
     */
    function initAudioPlayer() {
        const audioElement = document.getElementById('surahAudio');
        if (!audioElement) return;
        
        playerState.audioElement = audioElement;
        
        // Generate ayat selector buttons
        generateAyatButtons();
        
        // Setup event listeners
        setupPlayerControls();
        
        // Load first ayat
        loadAyat(0);
        
        // Setup audio event listeners
        audioElement.addEventListener('ended', handleAudioEnded);
        audioElement.addEventListener('timeupdate', updateProgress);
        audioElement.addEventListener('loadedmetadata', updateTimeDisplay);
    }
    
    /**
     * Generate Ayat Selection Buttons
     */
    function generateAyatButtons() {
        const container = document.getElementById('ayatButtons');
        if (!container) return;
        
        container.innerHTML = '';
        
        for (let i = 1; i <= SURAH_CONFIG.totalAyat; i++) {
            const button = document.createElement('button');
            button.className = 'ayat-btn';
            button.textContent = `Ayat ${i}`;
            button.dataset.ayat = i - 1;
            
            if (i === 1) {
                button.classList.add('active');
            }
            
            button.addEventListener('click', () => selectAyat(i - 1));
            container.appendChild(button);
        }
    }
    
    /**
     * Setup Player Control Buttons
     */
    function setupPlayerControls() {
        // Play button
        const playBtn = document.getElementById('playBtn');
        if (playBtn) {
            playBtn.addEventListener('click', playAudio);
        }
        
        // Pause button
        const pauseBtn = document.getElementById('pauseBtn');
        if (pauseBtn) {
            pauseBtn.addEventListener('click', pauseAudio);
        }
        
        // Previous button
        const prevBtn = document.getElementById('prevBtn');
        if (prevBtn) {
            prevBtn.addEventListener('click', previousAyat);
        }
        
        // Next button
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) {
            nextBtn.addEventListener('click', nextAyat);
        }
        
        // Loop button
        const loopBtn = document.getElementById('loopBtn');
        if (loopBtn) {
            loopBtn.addEventListener('click', toggleLoop);
        }
        
        // Speed control buttons
        const speedButtons = document.querySelectorAll('.speed-btn');
        speedButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const speed = parseFloat(e.target.dataset.speed);
                setPlaybackSpeed(speed);
            });
        });
    }
    
    /**
     * Load Specific Ayat
     */
    function loadAyat(index) {
        if (index < 0 || index >= SURAH_CONFIG.totalAyat) return;
        
        playerState.currentAyat = index;
        playerState.audioElement.src = SURAH_CONFIG.ayatUrls[index];
        
        // Update active button
        updateActiveAyatButton(index);
        
        // Highlight corresponding verse
        highlightVerse(index + 1);
    }
    
    /**
     * Select Ayat from Button
     */
    function selectAyat(index) {
        const wasPlaying = playerState.isPlaying;
        
        pauseAudio();
        loadAyat(index);
        
        if (wasPlaying) {
            playAudio();
        }
    }
    
    /**
     * Update Active Ayat Button
     */
    function updateActiveAyatButton(index) {
        const buttons = document.querySelectorAll('.ayat-btn');
        buttons.forEach((btn, i) => {
            if (i === index) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    /**
     * Highlight Current Verse in Article
     */
    function highlightVerse(verseNumber) {
        const verses = document.querySelectorAll('.verse-block');
        verses.forEach(verse => {
            if (parseInt(verse.dataset.verse) === verseNumber) {
                verse.style.backgroundColor = '#e7f3ff';
                verse.style.transform = 'scale(1.02)';
                
                // Scroll into view smoothly
                verse.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                verse.style.backgroundColor = '';
                verse.style.transform = '';
            }
        });
    }
    
    /**
     * Play Audio
     */
    function playAudio() {
        if (!playerState.audioElement) return;
        
        playerState.audioElement.play();
        playerState.isPlaying = true;
        
        // Update button states
        document.getElementById('playBtn').disabled = true;
        document.getElementById('pauseBtn').disabled = false;
    }
    
    /**
     * Pause Audio
     */
    function pauseAudio() {
        if (!playerState.audioElement) return;
        
        playerState.audioElement.pause();
        playerState.isPlaying = false;
        
        // Update button states
        document.getElementById('playBtn').disabled = false;
        document.getElementById('pauseBtn').disabled = true;
    }
    
    /**
     * Previous Ayat
     */
    function previousAyat() {
        const newIndex = playerState.currentAyat - 1;
        if (newIndex >= 0) {
            const wasPlaying = playerState.isPlaying;
            pauseAudio();
            loadAyat(newIndex);
            if (wasPlaying) {
                playAudio();
            }
        }
    }
    
    /**
     * Next Ayat
     */
    function nextAyat() {
        const newIndex = playerState.currentAyat + 1;
        if (newIndex < SURAH_CONFIG.totalAyat) {
            const wasPlaying = playerState.isPlaying;
            pauseAudio();
            loadAyat(newIndex);
            if (wasPlaying) {
                playAudio();
            }
        }
    }
    
    /**
     * Toggle Loop Mode
     */
    function toggleLoop() {
        playerState.isLooping = !playerState.isLooping;
        
        const loopBtn = document.getElementById('loopBtn');
        if (playerState.isLooping) {
            loopBtn.style.backgroundColor = '#667eea';
            loopBtn.style.color = 'white';
        } else {
            loopBtn.style.backgroundColor = '';
            loopBtn.style.color = '';
        }
    }
    
    /**
     * Set Playback Speed
     */
    function setPlaybackSpeed(speed) {
        playerState.playbackSpeed = speed;
        playerState.audioElement.playbackRate = speed;
        
        // Update active speed button
        const speedButtons = document.querySelectorAll('.speed-btn');
        speedButtons.forEach(btn => {
            if (parseFloat(btn.dataset.speed) === speed) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    /**
     * Handle Audio Ended Event
     */
    function handleAudioEnded() {
        if (playerState.isLooping) {
            // Loop current ayat
            playerState.audioElement.currentTime = 0;
            playAudio();
        } else {
            // Move to next ayat
            if (playerState.currentAyat < SURAH_CONFIG.totalAyat - 1) {
                nextAyat();
                playAudio();
            } else {
                // End of surah
                pauseAudio();
                loadAyat(0);
            }
        }
    }
    
    /**
     * Update Progress Bar
     */
    function updateProgress() {
        const audio = playerState.audioElement;
        if (!audio.duration) return;
        
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        const progressFill = document.getElementById('progressFill');
        
        if (progressFill) {
            progressFill.style.width = `${progressPercent}%`;
        }
        
        updateTimeDisplay();
    }
    
    /**
     * Update Time Display
     */
    function updateTimeDisplay() {
        const audio = playerState.audioElement;
        if (!audio) return;
        
        const currentTime = formatTime(audio.currentTime);
        const duration = formatTime(audio.duration);
        
        const timeDisplay = document.getElementById('timeDisplay');
        if (timeDisplay) {
            timeDisplay.textContent = `${currentTime} / ${duration}`;
        }
    }
    
    /**
     * Format Time (seconds to MM:SS)
     */
    function formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    /**
     * Initialize Hafazan Tracker
     */
    function initHafazanTracker() {
        const container = document.getElementById('memorizationTracker');
        if (!container) return;
        
        container.innerHTML = '';
        
        for (let i = 1; i <= SURAH_CONFIG.totalAyat; i++) {
            const tracker = document.createElement('div');
            tracker.className = 'verse-tracker';
            tracker.dataset.verse = i;
            
            if (hafazanState.masteredVerses.includes(i)) {
                tracker.classList.add('mastered');
            }
            
            tracker.innerHTML = `
                <div class="verse-tracker-num">${i}</div>
                <div class="verse-tracker-status">${hafazanState.masteredVerses.includes(i) ? '✓ Mastered' : 'Pending'}</div>
            `;
            
            tracker.addEventListener('click', () => toggleVerseMastery(i));
            container.appendChild(tracker);
        }
        
        updateHafazanStats();
        updateStreak();
    }
    
    /**
     * Toggle Verse Mastery Status
     */
    function toggleVerseMastery(verseNumber) {
        const index = hafazanState.masteredVerses.indexOf(verseNumber);
        
        if (index > -1) {
            // Remove from mastered
            hafazanState.masteredVerses.splice(index, 1);
        } else {
            // Add to mastered
            hafazanState.masteredVerses.push(verseNumber);
        }
        
        // Save to localStorage
        localStorage.setItem('surah109_mastered', JSON.stringify(hafazanState.masteredVerses));
        
        // Update today's practice date
        const today = new Date().toDateString();
        if (hafazanState.lastPracticeDate !== today) {
            hafazanState.lastPracticeDate = today;
            localStorage.setItem('surah109_lastPractice', today);
            updateStreak();
        }
        
        // Re-render tracker
        initHafazanTracker();
    }
    
    /**
     * Update Hafazan Statistics
     */
    function updateHafazanStats() {
        const masteredCount = hafazanState.masteredVerses.length;
        const progressPercent = Math.round((masteredCount / SURAH_CONFIG.totalAyat) * 100);
        
        const masteredEl = document.getElementById('masteredCount');
        const progressEl = document.getElementById('progressPercent');
        
        if (masteredEl) masteredEl.textContent = masteredCount;
        if (progressEl) progressEl.textContent = `${progressPercent}%`;
    }
    
    /**
     * Update Streak Days
     */
    function updateStreak() {
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        if (hafazanState.lastPracticeDate === today) {
            // Already practiced today, streak continues
        } else if (hafazanState.lastPracticeDate === yesterday) {
            // Practiced yesterday, increment streak
            hafazanState.streakDays++;
            localStorage.setItem('surah109_streak', hafazanState.streakDays.toString());
        } else if (hafazanState.lastPracticeDate !== null) {
            // Streak broken, reset
            hafazanState.streakDays = 1;
            localStorage.setItem('surah109_streak', '1');
        }
        
        const streakEl = document.getElementById('daysStreak');
        if (streakEl) {
            streakEl.textContent = hafazanState.streakDays;
        }
    }
    
    /**
     * Reset Progress (with confirmation)
     */
    window.resetProgress = function() {
        if (confirm('Adakah anda pasti mahu reset semua progress hafazan? Tindakan ini tidak boleh dibatalkan.')) {
            hafazanState.masteredVerses = [];
            hafazanState.lastPracticeDate = null;
            hafazanState.streakDays = 0;
            
            localStorage.removeItem('surah109_mastered');
            localStorage.removeItem('surah109_lastPractice');
            localStorage.removeItem('surah109_streak');
            
            initHafazanTracker();
            
            alert('✅ Progress hafazan telah direset. Mula semula dari awal!');
        }
    };
    
    /**
     * Share Content Function
     */
    window.shareContent = function() {
        const shareData = {
            title: 'Surah Al Kafirun - Platform Pembelajaran Interaktif',
            text: 'Belajar dan kuasai Surah Al Kafirun dengan tool interaktif yang amazing! 🕌',
            url: window.location.href
        };
        
        if (navigator.share) {
            navigator.share(shareData).catch(err => {
                console.log('Share cancelled or failed:', err);
            });
        } else {
            // Fallback: Copy URL to clipboard
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('✅ Link telah disalin! Share dengan rakan-rakan anda.');
            });
        }
    };
    
    /**
     * Bookmark Page Function
     */
    window.bookmarkPage = function() {
        if (window.sidebar && window.sidebar.addPanel) {
            // Firefox
            window.sidebar.addPanel(document.title, window.location.href, '');
        } else if (window.external && ('AddFavorite' in window.external)) {
            // IE
            window.external.AddFavorite(window.location.href, document.title);
        } else {
            // Other browsers
            alert('🔖 Tekan CTRL+D (Windows) atau CMD+D (Mac) untuk bookmark halaman ini.');
        }
    };
    
    /**
     * Copy Verses to Clipboard
     */
    window.copyVerses = function() {
        let versesText = 'SURAH AL KAFIRUN (سورة الكافرون)\n\n';
        
        const verses = [
            'قُلْ يَـٰٓأَيُّهَا ٱلْكَـٰفِرُونَ',
            'لَآ أَعْبُدُ مَا تَعْبُدُونَ',
            'وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ',
            'وَلَآ أَنَا۠ عَابِدٌۭ مَّا عَبَدتُّمْ',
            'وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ',
            'لَكُمْ دِينُكُمْ وَلِىَ دِينِ'
        ];
        
        verses.forEach((verse, index) => {
            versesText += `${index + 1}. ${verse}\n`;
        });
        
        versesText += '\n📖 Sumber: www.ilmualam.com/surah-al-kafirun';
        
        navigator.clipboard.writeText(versesText).then(() => {
            alert('✅ Teks Surah Al Kafirun telah disalin ke clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('❌ Gagal menyalin teks. Sila cuba lagi.');
        });
    };
    
    /**
     * Scroll to Player Function
     */
    window.scrollToPlayer = function() {
        const playerContainer = document.getElementById('audioPlayerContainer');
        if (playerContainer) {
            playerContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    
    /**
     * Toggle FAQ Function
     */
    window.toggleFaq = function(element) {
        const faqItem = element.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current FAQ
        if (!isActive) {
            faqItem.classList.add('active');
        }
    };
    
    /**
     * Initialize Everything on DOM Ready
     */
    function init() {
        // Check if we're on the right page
        if (!document.querySelector('.surah-container')) {
            return;
        }
        
        // Initialize audio player
        initAudioPlayer();
        
        // Initialize hafazan tracker
        initHafazanTracker();
        
        // Log successful initialization
        console.log('%c✅ Surah Al Kafirun Interactive Tool Loaded Successfully', 'color: green; font-size: 14px; font-weight: bold;');
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
