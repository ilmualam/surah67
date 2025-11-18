// ilmu-alkahfi-tool.js
// Version: 1.0.0
// Designed for ilmualam.com by Grandmaster SEO Alchemist
// Optimized for Core Web Vitals (CWV) and SEO
// Localization: Malay

(function() {
    const API_BASE_URL = 'https://api.alquran.cloud/v1';
    const SURAH_NUMBER = 18; // Surah Al-Kahf
    let currentAyah = 1;
    let totalAyahs = 110; // Total verses in Surah Al-Kahf
    let audioPlayer = new Audio();
    let isPlaying = false;
    let autoplayInterval;
    let currentAyahElement = null; // To keep track of the currently highlighted ayah element

    const elements = {};

    function getElement(id) {
        if (!elements[id]) {
            elements[id] = document.getElementById('ilmu-alkahfi-' + id);
        }
        return elements[id];
    }

    function createCustomCheckbox(label, id, checked = false) {
        const wrapper = document.createElement('div');
        wrapper.className = 'ilmu-alkahfi-custom-checkbox-wrapper';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'ilmu-alkahfi-' + id;
        input.className = 'ilmu-alkahfi-custom-checkbox-input';
        if (checked) input.checked = true;

        const customSpan = document.createElement('span');
        customSpan.className = 'ilmu-alkahfi-custom-checkbox-toggle';

        const labelElement = document.createElement('label');
        labelElement.htmlFor = 'ilmu-alkahfi-' + id;
        labelElement.className = 'ilmu-alkahfi-custom-checkbox-label';
        labelElement.textContent = label;

        wrapper.appendChild(input);
        wrapper.appendChild(customSpan);
        wrapper.appendChild(labelElement);

        return { wrapper, input };
    }

    function createCustomSelect(id, options) {
        const wrapper = document.createElement('div');
        wrapper.className = 'ilmu-alkahfi-custom-select-wrapper';

        const select = document.createElement('select');
        select.id = 'ilmu-alkahfi-' + id;
        select.className = 'ilmu-alkahfi-custom-select';

        options.forEach(optionData => {
            const option = document.createElement('option');
            option.value = optionData.value;
            option.textContent = optionData.text;
            select.appendChild(option);
        });

        const selectArrow = document.createElement('span');
        selectArrow.className = 'ilmu-alkahfi-custom-select-arrow';

        wrapper.appendChild(select);
        wrapper.appendChild(selectArrow);
        return { wrapper, select };
    }

    // Lazy load the Surah data
    async function loadSurahData() {
        const arabicResponse = await fetch(`${API_BASE_URL}/surah/${SURAH_NUMBER}/editions/quran-uthmani`);
        const transliterationResponse = await fetch(`${API_BASE_URL}/surah/${SURAH_NUMBER}/editions/en.maududi`); // Using English for Roman Transliteration example
        const malayResponse = await fetch(`${API_BASE_URL}/surah/${SURAH_NUMBER}/editions/ms.basmeih`);

        const arabicData = await arabicResponse.json();
        const transliterationData = await transliterationResponse.json();
        const malayData = await malayResponse.json();

        const surahContainer = getElement('surah-container');
        if (!surahContainer) return;

        surahContainer.innerHTML = ''; // Clear previous content

        if (arabicData.data && malayData.data) {
            totalAyahs = arabicData.data.ayahs.length;
            const ayahNumbers = Array.from({ length: totalAyahs }, (_, i) => ({ value: i + 1, text: `Ayat ${i + 1}` }));
            const { select: goToAyahSelect } = createCustomSelect('goto-ayah', ayahNumbers);
            getElement('goto-ayah-container').innerHTML = ''; // Clear previous
            getElement('goto-ayah-container').appendChild(goToAyahSelect);
            goToAyahSelect.addEventListener('change', (e) => navigateToAyah(parseInt(e.target.value)));

            for (let i = 0; i < totalAyahs; i++) {
                const ayahNumber = i + 1;
                const ayahDiv = document.createElement('div');
                ayahDiv.id = `ilmu-alkahfi-ayah-${ayahNumber}`;
                ayahDiv.className = 'ilmu-alkahfi-ayah-item';
                ayahDiv.setAttribute('data-ayah', ayahNumber);

                ayahDiv.innerHTML = `
                    <div class="ilmu-alkahfi-ayah-number"> ${ayahNumber} </div>
                    <div class="ilmu-alkahfi-ayah-arabic">${arabicData.data.ayahs[i].text}</div>
                    <div class="ilmu-alkahfi-ayah-transliteration">Roman: ${transliterationData.data.ayahs[i].text}</div>
                    <div class="ilmu-alkahfi-ayah-translation">Terjemahan: ${malayData.data.ayahs[i].text}</div>
                    <div class="ilmu-alkahfi-ayah-actions">
                        <button class="ilmu-alkahfi-action-btn ilmu-alkahfi-copy-btn" data-ayah-number="${ayahNumber}">Salin</button>
                        <button class="ilmu-alkahfi-action-btn ilmu-alkahfi-share-btn" data-ayah-number="${ayahNumber}">Kongsi</button>
                        <button class="ilmu-alkahfi-action-btn ilmu-alkahfi-bookmark-btn" data-ayah-number="${ayahNumber}">Tanda Halaman</button>
                    </div>
                `;
                surahContainer.appendChild(ayahDiv);
            }
            addAyahActionListeners();
            highlightCurrentAyah(); // Ensure first ayah is highlighted if applicable
            loadBookmarksForJourney(); // Load bookmarks specific to current journey
        } else {
            surahContainer.innerHTML = '<p class="ilmu-alkahfi-error">Gagal memuatkan data Surah Al-Kahf. Sila cuba sebentar lagi.</p>';
        }
    }

    function addAyahActionListeners() {
        getElement('surah-container').addEventListener('click', (event) => {
            const target = event.target;
            const ayahNumber = target.dataset.ayahNumber;

            if (target.classList.contains('ilmu-alkahfi-copy-btn')) {
                copyAyahText(ayahNumber);
            } else if (target.classList.contains('ilmu-alkahfi-share-btn')) {
                shareAyahText(ayahNumber);
            } else if (target.classList.contains('ilmu-alkahfi-bookmark-btn')) {
                toggleBookmark(ayahNumber);
            }
        });
    }

    // Audio Playback
    async function playAyahAudio(ayahNumber) {
        try {
            const response = await fetch(`${API_BASE_URL}/ayah/${SURAH_NUMBER}:${ayahNumber}/editions/ar.alafasy`); // Reciter
            const data = await response.json();
            if (data.data && data.data.audio) {
                audioPlayer.src = data.data.audio;
                audioPlayer.play();
                isPlaying = true;
                getElement('play-pause-btn').innerHTML = '<i class="ilmu-alkahfi-icon-pause"></i>'; // Pause icon
                audioPlayer.onended = () => {
                    if (getElement('autoplay-toggle').checked) {
                        currentAyah++;
                        if (currentAyah <= totalAyahs) {
                            navigateToAyah(currentAyah);
                            playAyahAudio(currentAyah);
                        } else {
                            stopAutoplay();
                        }
                    } else {
                        isPlaying = false;
                        getElement('play-pause-btn').innerHTML = '<i class="ilmu-alkahfi-icon-play"></i>'; // Play icon
                    }
                };
            }
        } catch (error) {
            console.error("Ralat memainkan audio:", error);
        }
    }

    function pauseAudio() {
        audioPlayer.pause();
        isPlaying = false;
        getElement('play-pause-btn').innerHTML = '<i class="ilmu-alkahfi-icon-play"></i>'; // Play icon
    }

    function togglePlayPause() {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAyahAudio(currentAyah);
        }
    }

    function startAutoplay() {
        if (!autoplayInterval) {
            playAyahAudio(currentAyah);
        }
    }

    function stopAutoplay() {
        audioPlayer.pause();
        isPlaying = false;
        getElement('play-pause-btn').innerHTML = '<i class="ilmu-alkahfi-icon-play"></i>'; // Play icon
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    }

    function navigateToAyah(ayahNumber) {
        currentAyah = Math.max(1, Math.min(ayahNumber, totalAyahs));
        const targetAyah = getElement(`ayah-${currentAyah}`);
        if (targetAyah) {
            targetAyah.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (getElement('highlight-toggle').checked) {
            highlightCurrentAyah();
        }
        // Update Go to Ayah select
        getElement('goto-ayah').value = currentAyah;
    }

    function highlightCurrentAyah() {
        if (currentAyahElement) {
            currentAyahElement.classList.remove('ilmu-alkahfi-active-ayah');
        }
        const newActiveAyahElement = getElement(`ayah-${currentAyah}`);
        if (newActiveAyahElement) {
            newActiveAyahElement.classList.add('ilmu-alkahfi-active-ayah');
            currentAyahElement = newActiveAyahElement;
        }
    }

    // Utility for copying text
    async function copyAyahText(ayahNumber) {
        const ayahElement = getElement(`ayah-${ayahNumber}`);
        if (!ayahElement) return;

        const arabic = ayahElement.querySelector('.ilmu-alkahfi-ayah-arabic')?.textContent || '';
        const transliteration = ayahElement.querySelector('.ilmu-alkahfi-ayah-transliteration')?.textContent || '';
        const translation = ayahElement.querySelector('.ilmu-alkahfi-ayah-translation')?.textContent || '';

        const textToCopy = `Surah Al-Kahf, Ayat ${ayahNumber}:\n${arabic}\n${transliteration}\n${translation}\n\nBaca lebih lanjut di ilmualam.com`;

        try {
            await navigator.clipboard.writeText(textToCopy);
            alert('Ayat disalin ke papan keratan!');
        } catch (err) {
            console.error('Gagal menyalin teks: ', err);
            alert('Tidak dapat menyalin Ayat. Sila cuba secara manual.');
        }
    }

    // Utility for sharing text (Web Share API)
    function shareAyahText(ayahNumber) {
        const ayahElement = getElement(`ayah-${ayahNumber}`);
        if (!ayahElement) return;

        const arabic = ayahElement.querySelector('.ilmu-alkahfi-ayah-arabic')?.textContent || '';
        const transliteration = ayahElement.querySelector('.ilmu-alkahfi-ayah-transliteration')?.textContent || '';
        const translation = ayahElement.querySelector('.ilmu-alkahfi-ayah-translation')?.textContent || '';

        const shareData = {
            title: `Surah Al-Kahf - Ayat ${ayahNumber}`,
            text: `Surah Al-Kahf, Ayat ${ayahNumber}:\n${arabic}\n${transliteration}\n${translation}`,
            url: window.location.href.split('#')[0] + `#ilmu-alkahfi-ayah-${ayahNumber}`
        };

        if (navigator.share) {
            navigator.share(shareData)
                .catch((error) => console.error('Ralat berkongsi:', error));
        } else {
            alert('API Perkongsian Web tidak disokong dalam pelayar ini. Sila gunakan fungsi salin.');
        }
    }

    // "The Time Traveler's Bookmark" - LocalStorage Management
    const BOOKMARK_KEY_PREFIX = 'ilmu-alkahfi-journey-';
    let currentJourney = 'default';

    function getJourneys() {
        try {
            const journeys = JSON.parse(localStorage.getItem('ilmu-alkahfi-journeys')) || {};
            return journeys;
        } catch (e) {
            console.error("Ralat menghuraikan perjalanan dari LocalStorage:", e);
            return {};
        }
    }

    function saveJourneys(journeys) {
        localStorage.setItem('ilmu-alkahfi-journeys', JSON.stringify(journeys));
    }

    function createOrSelectJourney(name) {
        let journeys = getJourneys();
        if (!journeys[name]) {
            journeys[name] = { name: name, bookmarks: [] };
            saveJourneys(journeys);
        }
        currentJourney = name;
        updateJourneySelector(journeys);
        loadBookmarksForJourney();
        getElement('current-journey-name').textContent = name;
    }

    function toggleBookmark(ayahNumber) {
        let journeys = getJourneys();
        let journey = journeys[currentJourney];

        if (!journey) {
            console.error("Tiada perjalanan aktif untuk ditanda halaman.");
            return;
        }

        const ayahId = `ilmu-alkahfi-ayah-${ayahNumber}`;
        const index = journey.bookmarks.indexOf(ayahId);
        const bookmarkButton = getElement(`ayah-${ayahNumber}`).querySelector('.ilmu-alkahfi-bookmark-btn');

        if (index > -1) {
            journey.bookmarks.splice(index, 1); // Remove bookmark
            bookmarkButton.classList.remove('ilmu-alkahfi-bookmarked');
            bookmarkButton.textContent = 'Tanda Halaman';
            alert(`Penanda halaman dikeluarkan dari Ayat ${ayahNumber} dalam perjalanan "${currentJourney}"`);
        } else {
            journey.bookmarks.push(ayahId); // Add bookmark
            bookmarkButton.classList.add('ilmu-alkahfi-bookmarked');
            bookmarkButton.textContent = 'Dilanda Halaman';
            alert(`Ayat ${ayahNumber} ditanda halaman dalam perjalanan "${currentJourney}"`);
        }
        saveJourneys(journeys);
        updateJourneyBookmarksDisplay(journey.bookmarks);
    }

    function loadBookmarksForJourney() {
        // Remove all previous bookmark highlights
        document.querySelectorAll('.ilmu-alkahfi-ayah-item .ilmu-alkahfi-bookmark-btn').forEach(btn => {
            btn.classList.remove('ilmu-alkahfi-bookmarked');
            btn.textContent = 'Tanda Halaman';
        });

        let journeys = getJourneys();
        let journey = journeys[currentJourney];

        if (journey && journey.bookmarks) {
            journey.bookmarks.forEach(ayahId => {
                const ayahNumber = ayahId.split('-').pop();
                const bookmarkButton = getElement(`ayah-${ayahNumber}`)?.querySelector('.ilmu-alkahfi-bookmark-btn');
                if (bookmarkButton) {
                    bookmarkButton.classList.add('ilmu-alkahfi-bookmarked');
                    bookmarkButton.textContent = 'Dilanda Halaman';
                }
            });
            updateJourneyBookmarksDisplay(journey.bookmarks);
        } else {
            updateJourneyBookmarksDisplay([]); // Clear display if no bookmarks
        }
    }

    function updateJourneySelector(journeys) {
        const journeySelectContainer = getElement('journey-select-container');
        journeySelectContainer.innerHTML = ''; // Clear previous

        const options = Object.keys(journeys).map(key => ({
            value: key,
            text: journeys[key].name
        }));

        const { wrapper, select: journeySelect } = createCustomSelect('journey-selector', options);
        journeySelectContainer.appendChild(wrapper);
        journeySelect.value = currentJourney; // Set current journey

        journeySelect.addEventListener('change', (e) => {
            createOrSelectJourney(e.target.value);
        });

        const newJourneyBtn = document.createElement('button');
        newJourneyBtn.className = 'ilmu-alkahfi-btn ilmu-alkahfi-new-journey-btn';
        newJourneyBtn.innerHTML = '<i class="ilmu-alkahfi-icon-add-journey"></i> Perjalanan Baru';
        newJourneyBtn.onclick = () => {
            const journeyName = prompt("Masukkan nama untuk perjalanan membaca baharu anda:");
            if (journeyName && journeyName.trim() !== '') {
                createOrSelectJourney(journeyName.trim());
            }
        };
        journeySelectContainer.appendChild(newJourneyBtn);
    }

    function updateJourneyBookmarksDisplay(bookmarks) {
        const journeyBookmarksList = getElement('journey-bookmarks-list');
        if (!journeyBookmarksList) return;
        journeyBookmarksList.innerHTML = '';
        if (bookmarks.length === 0) {
            journeyBookmarksList.innerHTML = '<li class="ilmu-alkahfi-no-bookmarks">Tiada penanda halaman dalam perjalanan ini lagi.</li>';
            return;
        }

        bookmarks.forEach(ayahId => {
            const ayahNumber = ayahId.split('-').pop();
            const listItem = document.createElement('li');
            listItem.className = 'ilmu-alkahfi-journey-bookmark-item';
            listItem.innerHTML = `<a href="#${ayahId}" data-ayah-number="${ayahNumber}">${currentJourney} - Ayat ${ayahNumber}</a>`;
            listItem.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                navigateToAyah(parseInt(e.target.dataset.ayahNumber));
            });
            journeyBookmarksList.appendChild(listItem);
        });
    }

    // Initialize all event listeners and load data
    function init() {
        // Setup controls
        const playPauseBtn = getElement('play-pause-btn');
        if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);

        const autoplayControl = createCustomCheckbox('Autoplay', 'autoplay-toggle', false);
        getElement('autoplay-control-container').appendChild(autoplayControl.wrapper);
        autoplayControl.input.addEventListener('change', (e) => {
            if (e.target.checked) {
                startAutoplay();
            } else {
                stopAutoplay();
            }
        });

        const autoScrollControl = createCustomCheckbox('Tatal Auto', 'autoscroll-toggle', true);
        getElement('autoscroll-control-container').appendChild(autoScrollControl.wrapper);
        // Autoscroll logic is handled within playAyahAudio -> scrollIntoView

        const highlightControl = createCustomCheckbox('Serlahkan Aktif', 'highlight-toggle', true);
        getElement('highlight-control-container').appendChild(highlightControl.wrapper);
        highlightControl.input.addEventListener('change', (e) => {
            if (e.target.checked) {
                highlightCurrentAyah();
            } else {
                if (currentAyahElement) {
                    currentAyahElement.classList.remove('ilmu-alkahfi-active-ayah');
                }
            }
        });

        // Initialize Time Traveler's Bookmark
        const journeys = getJourneys();
        if (Object.keys(journeys).length === 0) {
            createOrSelectJourney('Perjalanan Pertama Saya'); // Create a default journey if none exist
        } else {
            const firstJourneyName = Object.keys(journeys)[0];
            createOrSelectJourney(firstJourneyName);
        }

        // Lazy load Surah data
        loadSurahData();
    }

    // Run initialization after DOM is fully loaded
    document.addEventListener('DOMContentLoaded', init);

})();
