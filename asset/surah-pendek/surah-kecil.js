/**
 * 10 Surah Pendek Master Dashboard System
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
    
    // ==========================================
    // DOMAIN PROTECTION & COPYRIGHT
    // ==========================================
    
    const AUTHORIZED_DOMAIN = 'ilmualam.com';
    const COPYRIGHT_HASH = 'SWxtdUFsYW0xMFN1cmFoUGVuZGVrMjAyNQ=='; // Base64 encoded
    
    /**
     * Domain Verification System
     */
    function verifyDomain() {
        const currentDomain = window.location.hostname.replace('www.', '');
        
        if (!currentDomain.includes(AUTHORIZED_DOMAIN)) {
            console.warn('%c⚠️ UNAUTHORIZED DOMAIN', 'color: red; font-size: 16px; font-weight: bold;');
            console.warn('%cThis script is licensed exclusively for www.ilmualam.com', 'color: red; font-size: 12px;');
            console.warn('%cCopyright © 2025 Ilmu Alam. All Rights Reserved.', 'color: red; font-size: 12px;');
            return false;
        }
        return true;
    }
    
    /**
     * Anti-Tampering Protection
     */
    function initProtection() {
        const protectedElements = document.querySelectorAll('.master-dashboard, .audio-player-mini');
        protectedElements.forEach(element => {
            element.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                return false;
            });
        });
        
        // Console branding
        console.log('%c🕌 10 Surah Pendek Master System', 'color: #249749; font-size: 18px; font-weight: bold;');
        console.log('%c© 2025 Ilmu Alam (www.ilmualam.com)', 'color: #0c3808; font-size: 14px;');
        console.log('%cEmpowering Muslims through interactive Quran learning', 'color: #0d7377; font-size: 12px;');
        console.log('%c' + atob(COPYRIGHT_HASH), 'color: #999; font-size: 10px;');
    }
    
    // Verify domain before initialization
    if (!verifyDomain()) {
        return; // Stop execution on unauthorized domains
    }
    
    initProtection();
    
    // ==========================================
    // 10 SURAH CONFIGURATION
    // ==========================================
    
    const SURAH_DATA = [
        {
            id: 1,
            name: 'Al-Ikhlas',
            nameArabic: 'الإخلاص',
            surahNumber: 112,
            ayatCount: 4,
            difficulty: 'easy',
            level: 1
        },
        {
            id: 2,
            name: 'Al-Falaq',
            nameArabic: 'الفلق',
            surahNumber: 113,
            ayatCount: 5,
            difficulty: 'easy',
            level: 1
        },
        {
            id: 3,
            name: 'An-Nas',
            nameArabic: 'الناس',
            surahNumber: 114,
            ayatCount: 6,
            difficulty: 'easy',
            level: 1
        },
        {
            id: 4,
            name: 'Al-Kawthar',
            nameArabic: 'الكوثر',
            surahNumber: 108,
            ayatCount: 3,
            difficulty: 'easy',
            level: 1
        },
        {
            id: 5,
            name: 'Al-Asr',
            nameArabic: 'العصر',
            surahNumber: 103,
            ayatCount: 3,
            difficulty: 'medium',
            level: 2
        },
        {
            id: 6,
            name: 'Al-Kafirun',
            nameArabic: 'الكافرون',
            surahNumber: 109,
            ayatCount: 6,
            difficulty: 'medium',
            level: 2
        },
        {
            id: 7,
            name: 'Al-Fil',
            nameArabic: 'الفيل',
            surahNumber: 105,
            ayatCount: 5,
            difficulty: 'medium',
            level: 2
        },
        {
            id: 8,
            name: 'Quraisy',
            nameArabic: 'قريش',
            surahNumber: 106,
            ayatCount: 4,
            difficulty: 'medium',
            level: 2
        },
        {
            id: 9,
            name: 'Al-Zalzalah',
            nameArabic: 'الزلزلة',
            surahNumber: 99,
            ayatCount: 8,
            difficulty: 'hard',
            level: 3
        },
        {
            id: 10,
            name: 'Al-Qadr',
            nameArabic: 'القدر',
            surahNumber: 97,
            ayatCount: 5,
            difficulty: 'hard',
            level: 3
        }
    ];
    
    // Audio configuration
    const AUDIO_CONFIG = {
        baseUrl: 'https://everyayah.com/data/',
        reciter: 'Abdul_Basit_Murattal_192kbps'
    };
    
    // ==========================================
    // STATE MANAGEMENT
    // ==========================================
    
    const state = {
        completedSurah: JSON.parse(localStorage.getItem('surah10_completed') || '[]'),
        lastPracticeDate: localStorage.getItem('surah10_lastPractice') || null,
        streakDays: parseInt(localStorage.getItem('surah10_streak') || '0'),
        currentPlayingSurah: null,
        audioElement: null
    };
    
    // ==========================================
    // DASHBOARD INITIALIZATION
    // ==========================================
    
    /**
     * Initialize Master Dashboard
     */
    function initDashboard() {
        const container = document.getElementById('surahGridTracker');
        if (!container) return;
        
        container.innerHTML = '';
        
        SURAH_DATA.forEach(surah => {
            const card = createSurahCard(surah);
            container.appendChild(card);
        });
        
        updateDashboardStats();
        updateStreak();
    }
    
    /**
     * Create Individual Surah Card for Dashboard
     */
    function createSurahCard(surah) {
        const card = document.createElement('div');
        card.className = 'surah-card-mini';
        card.dataset.surahId = surah.id;
        
        const isCompleted = state.completedSurah.includes(surah.id);
        if (isCompleted) {
            card.classList.add('completed');
        }
        
        const statusIcon = isCompleted ? '✓' : '○';
        const statusText = isCompleted ? 'Completed' : 'Pending';
        
        card.innerHTML = `
            <div class="status-icon">${statusIcon}</div>
            <h4>${surah.name}</h4>
            <div class="surah-arabic" style="font-size: 0.9rem; opacity: 0.8;">${surah.nameArabic}</div>
            <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.7;">${surah.ayatCount} ayat</div>
            <div style="font-size: 0.7rem; margin-top: 0.3rem;">${statusText}</div>
        `;
        
        card.addEventListener('click', () => toggleSurahCompletion(surah.id));
        
        return card;
    }
    
    /**
     * Toggle Surah Completion Status
     */
    function toggleSurahCompletion(surahId) {
        const index = state.completedSurah.indexOf(surahId);
        
        if (index > -1) {
            // Mark as incomplete
            state.completedSurah.splice(index, 1);
        } else {
            // Mark as complete
            state.completedSurah.push(surahId);
        }
        
        // Save to localStorage
        localStorage.setItem('surah10_completed', JSON.stringify(state.completedSurah));
        
        // Update practice date
        const today = new Date().toDateString();
        if (state.lastPracticeDate !== today) {
            state.lastPracticeDate = today;
            localStorage.setItem('surah10_lastPractice', today);
            updateStreak();
        }
        
        // Re-render dashboard
        initDashboard();
    }
    
    /**
     * Update Dashboard Statistics
     */
    function updateDashboardStats() {
        const completedCount = state.completedSurah.length;
        const totalSurah = SURAH_DATA.length;
        const progressPercent = Math.round((completedCount / totalSurah) * 100);
        
        // Calculate total ayat mastered
        let totalAyat = 0;
        state.completedSurah.forEach(surahId => {
            const surah = SURAH_DATA.find(s => s.id === surahId);
            if (surah) totalAyat += surah.ayatCount;
        });
        
        // Update overall progress bar
        const progressFill = document.getElementById('overallProgress');
        if (progressFill) {
            progressFill.style.width = `${progressPercent}%`;
            progressFill.textContent = `${progressPercent}%`;
        }
        
        // Update completed count
        const completedEl = document.getElementById('completedCount');
        if (completedEl) {
            completedEl.textContent = completedCount;
        }
        
        // Update total ayat
        const ayatEl = document.getElementById('totalAyat');
        if (ayatEl) {
            ayatEl.textContent = totalAyat;
        }
        
        // Update estimated days (dynamic based on progress)
        const estimatedEl = document.getElementById('estimatedDays');
        if (estimatedEl) {
            const remainingSurah = totalSurah - completedCount;
            const estimatedDays = remainingSurah * 3; // 3 days per surah average
            estimatedEl.textContent = estimatedDays;
        }
        
        // Update streak
        const streakEl = document.getElementById('streakDays');
        if (streakEl) {
            streakEl.textContent = state.streakDays;
        }
    }
    
    /**
     * Update Streak Counter
     */
    function updateStreak() {
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        if (state.lastPracticeDate === today) {
            // Already practiced today
        } else if (state.lastPracticeDate === yesterday) {
            // Practiced yesterday, increment streak
            state.streakDays++;
            localStorage.setItem('surah10_streak', state.streakDays.toString());
        } else if (state.lastPracticeDate !== null) {
            // Streak broken, reset
            state.streakDays = 1;
            localStorage.setItem('surah10_streak', '1');
        }
        
        const streakEl = document.getElementById('streakDays');
        if (streakEl) {
            streakEl.textContent = state.streakDays;
        }
    }
    
    /**
     * Reset Dashboard (Global Function)
     */
    window.resetDashboard = function() {
        if (confirm('Adakah anda pasti mahu reset semua progress? Tindakan ini tidak boleh dibatalkan.')) {
            state.completedSurah = [];
            state.lastPracticeDate = null;
            state.streakDays = 0;
            
            localStorage.removeItem('surah10_completed');
            localStorage.removeItem('surah10_lastPractice');
            localStorage.removeItem('surah10_streak');
            
            initDashboard();
            
            alert('✅ Dashboard telah direset. Mula dari awal!');
        }
    };
    
    // ==========================================
    // AUDIO PLAYER SYSTEM
    // ==========================================
    
    /**
     * Generate Audio URL for Surah
     */
    function getAudioUrl(surahNumber) {
        const paddedSurah = String(surahNumber).padStart(3, '0');
        // Full surah audio (ayat 001)
        return `${AUDIO_CONFIG.baseUrl}${AUDIO_CONFIG.reciter}/${paddedSurah}001.mp3`;
    }
    
    /**
     * Play Surah Audio (Global Function)
     */
    window.playSurah = function(surahNumber) {
        // Create audio element if doesn't exist
        if (!state.audioElement) {
            state.audioElement = new Audio();
            state.audioElement.addEventListener('ended', handleAudioEnded);
            state.audioElement.addEventListener('error', handleAudioError);
        }
        
        // Stop current audio if playing
        if (state.currentPlayingSurah) {
            state.audioElement.pause();
        }
        
        // Load and play new surah
        const audioUrl = getAudioUrl(surahNumber);
        state.audioElement.src = audioUrl;
        state.currentPlayingSurah = surahNumber;
        
        // Update status
        updateAudioStatus('Loading...');
        
        state.audioElement.play()
            .then(() => {
                const surah = SURAH_DATA.find(s => s.surahNumber === surahNumber);
                updateAudioStatus(`Playing: ${surah ? surah.name : 'Surah ' + surahNumber}`);
            })
            .catch(error => {
                console.error('Audio play error:', error);
                updateAudioStatus('Failed to load audio. Please try again.');
            });
    };
    
    /**
     * Pause Surah Audio (Global Function)
     */
    window.pauseSurah = function() {
        if (state.audioElement && state.currentPlayingSurah) {
            state.audioElement.pause();
            updateAudioStatus('Paused');
        }
    };
    
    /**
     * Mark Surah as Completed (Global Function)
     */
    window.markCompleted = function(surahId) {
        if (!state.completedSurah.includes(surahId)) {
            toggleSurahCompletion(surahId);
            
            const surah = SURAH_DATA.find(s => s.id === surahId);
            if (surah) {
                alert(`✅ Tahniah! ${surah.name} telah ditandakan sebagai completed!`);
            }
        } else {
            alert('Surah ini sudah completed. Klik pada dashboard card untuk unmark.');
        }
    };
    
    /**
     * Handle Audio Ended
     */
    function handleAudioEnded() {
        updateAudioStatus('Playback completed');
        state.currentPlayingSurah = null;
    }
    
    /**
     * Handle Audio Error
     */
    function handleAudioError(e) {
        console.error('Audio error:', e);
        updateAudioStatus('Audio error. Please check connection.');
        state.currentPlayingSurah = null;
    }
    
    /**
     * Update Audio Status Display
     */
    function updateAudioStatus(message) {
        const statusElements = document.querySelectorAll('.audio-status');
        statusElements.forEach(el => {
            el.textContent = message;
        });
    }
    
    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================
    
    /**
     * Scroll to Dashboard (Global Function)
     */
    window.scrollToDashboard = function() {
        const dashboard = document.getElementById('masterDashboard');
        if (dashboard) {
            dashboard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    
    /**
     * Toggle FAQ Items (Global Function)
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
    
    // ==========================================
    // INITIALIZATION
    // ==========================================
    
    /**
     * Main Initialization Function
     */
    function init() {
        // Check if we're on the correct page
        if (!document.querySelector('.surah-hub-container')) {
            return;
        }
        
        // Initialize dashboard
        initDashboard();
        
        // Log successful initialization
        console.log('%c✅ 10 Surah Pendek System Loaded Successfully', 'color: #249749; font-size: 14px; font-weight: bold;');
        console.log('%cDashboard ready. Completed surah: ' + state.completedSurah.length + '/10', 'color: #0c3808; font-size: 12px;');
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // ==========================================
    // ADDITIONAL FEATURES
    // ==========================================
    
    /**
     * Export Progress Data (for advanced users)
     */
    window.exportProgress = function() {
        const data = {
            completed: state.completedSurah,
            lastPractice: state.lastPracticeDate,
            streak: state.streakDays,
            exportDate: new Date().toISOString()
        };
        
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = '10-surah-progress-' + new Date().toISOString().split('T')[0] + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        alert('✅ Progress data exported successfully!');
    };
    
    /**
     * Import Progress Data (for advanced users)
     */
    window.importProgress = function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    
                    if (confirm('Import progress data? This will overwrite current progress.')) {
                        state.completedSurah = data.completed || [];
                        state.lastPracticeDate = data.lastPractice || null;
                        state.streakDays = data.streak || 0;
                        
                        localStorage.setItem('surah10_completed', JSON.stringify(state.completedSurah));
                        localStorage.setItem('surah10_lastPractice', state.lastPracticeDate);
                        localStorage.setItem('surah10_streak', state.streakDays.toString());
                        
                        initDashboard();
                        alert('✅ Progress imported successfully!');
                    }
                } catch (error) {
                    alert('❌ Invalid file format. Please use exported JSON file.');
                }
            };
            
            reader.readAsText(file);
        };
        
        input.click();
    };
    
    // ==========================================
    // PERFORMANCE MONITORING (Optional)
    // ==========================================
    
    /**
     * Track Performance Metrics
     */
    function trackPerformance() {
        if (window.performance && window.performance.timing) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const timing = window.performance.timing;
                    const loadTime = timing.loadEventEnd - timing.navigationStart;
                    
                    console.log('%cPage Load Time: ' + loadTime + 'ms', 'color: #0d7377; font-size: 11px;');
                }, 0);
            });
        }
    }
    
    trackPerformance();
    
})();
```

---

# INSTALLATION INSTRUCTIONS

### Step 1: Upload ke GitHub

1. Create file baru: `10-surah-pendek-system.js`
2. Copy kod JavaScript di atas
3. Upload ke repo: `ilmualam-quran-tools/js/`

### Step 2: Get CDN Link

Format URL:
```
https://cdn.jsdelivr.net/gh/[USERNAME]/ilmualam-quran-tools@main/js/10-surah-pendek-system.js
```

Contoh (ganti dengan username anda):
```
https://cdn.jsdelivr.net/gh/ismalsalamah/ilmualam-quran-tools@main/js/10-surah-pendek-system.js
