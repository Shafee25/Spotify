const rawSongs = [
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049838/Meyyana-Inbam_fpddnz.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049835/Vaane_Vaane_baxxru.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049832/Vennilavu_Saaral_amxgdj.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049831/Chola-Chola-MassTamilan.dev_gvt6s0.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049811/Villain-Yaaru-MassTamilan.dev_1_mjcsqu.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049805/Uyirey_v6m2s5.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049803/Ragasiya-Kanavugal_isfqhe.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049801/Oh-Ringa-Ringa_pfcfso.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049793/Minnazhgal-Koothadam_eshhlh.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049788/Marudhaani-Marudhaani_urkrba.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049778/Kanave_h3cpea.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049769/Kaadhal-Oru_zrxv7h.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049761/Hey_Minnale_xfihbo.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049753/Engeyum-Kaadhal_coxdjq.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049749/Yamma-Yamma_pqgt2c.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049742/Yaarenna-Sonnalum-MassTamilan.fm_jdvbso.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049731/Yaar_Azhaippadhu_-Masstamilan.In_yafs4m.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049731/Yaarukkum-Sollaama_qjczlj.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049720/Whistle_Podu_npywns.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049719/Yaaraiyum-Ivlo-Azhaga-MassTamilan.io_pcw2f7.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049711/Thalaivane-MassTamilan.dev_uporak.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049709/Vennila-MassTamilan.com_oephbc.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049699/Uyir-Urugudhey-MassTamilan.dev_dsk7pv.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049694/Vaa-Thalaivaa-MassTamilan.dev_p5obj3.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049693/Thuli-Thuli-Mazhaiyaai_o9czqi.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049687/Taxi-Taxi_gvnlsu.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049687/Thumbi-Thullal-MassTamilan.dev_sk4mxo.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049669/Poongatre-Poongatre_qvw8yw.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049665/Tharamele-Irundhena_keghog.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049664/Siragugal_jyiabe.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049659/Sutta-Suriyane_vc9csj.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049656/Suthuthe-Suthuthe-Bhoomi_u7zm8c.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049638/Pogathey-MassTamilan.dev_at1ws8.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049638/Siru-Paarvayalae_gykyop.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049634/Ranjithame-MassTamilan.dev_hatzsi.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049624/Poradalam_zreobn.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049617/Pogalam_kxhbcu.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049617/Oru-Manam-MassTamilan.io_d3fci4.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049602/Oru-Mugamo_ms0a7n.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049582/Natpu-MassTamilan.so_ttt4bc.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049581/Oh-Sunandha_cqhenn.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049580/Odiyamma_Hi_Nanna_Dhruv_Vikram_Shruti_Haasan_Chinmayi_Sripaada-_MalayalamMusic.In_wynw2c.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049575/Oru-Devadhai_errwfk.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049558/Mundhinam-Parthene-MassTamilan.com_jxjyry.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049545/Mudhal-Mazhai_lhufko.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049545/Nee-Nenacha-MassTamilan.org_tgib8y.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049535/Narumugaye-MassTamilan.com_pk38ym.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049525/Mudhal-Nee-Mudivum-Nee-Title-Track-MassTamilan.io_exi4ko.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049511/Kanmoodi_Thirakumbothu_-_Masstamilan.in_jdsvon.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049522/Naa-Ready-MassTamilan.dev_o1bxaj.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049505/Kannukkul-Kannai_kqt1ew.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049468/Idhu-Enna-Idhu-Enna_ezuq2t.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049468/Kaalathukkum-Nee-Venum-MassTamilan.dev_crfyxm.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049476/Irava-Pagala_apax2y.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049450/Gala-Gala_dslr7r.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049456/Ennai-Konjam_hsnhvp.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049448/DADA-Song-MassTamilan.dev_xgaqo6.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049393/Anbil-Avan_droz02.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049373/Adada-Mazhaida_fzsqcq.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049321/Unnaal-Penne-MassTamilan.io_lmfmpy.mp3",
    "https://res.cloudinary.com/dpkmgayqx/video/upload/v1778049275/Soul-Of-Varisu-MassTamilan.dev_kwtzv5.mp3"
];

// Clean up song names from URLs
let songs = rawSongs.map((url, index) => {
    // Extract filename without extension
    let filename = url.split('/').pop().replace('.mp3', '');
    
    // Remove unwanted suffixes and hash-like strings
    filename = filename.replace(/-MassTamilan\.(dev|fm|io|com|so|org)/gi, '')
                       .replace(/_Masstamilan\.In/gi, '')
                       .replace(/_-Masstamilan\.in/gi, '')
                       .replace(/_[a-z0-9]{6}$/, ''); // Removes the trailing random chars like _fpddnz

    // Replace hyphens and underscores with spaces
    filename = filename.replace(/[-_]/g, ' ');

    // Basic Title Case formatting (optional, but looks nicer)
    filename = filename.replace(/\b\w/g, l => l.toUpperCase());
    
    // Handle specific weird namings from the list
    filename = filename.replace(/1 Mjcsqu/g, '') // Cleanup from Villain Yaaru
                       .trim();
                       
    // Use the generated cover for all, or allow some variance if desired
    const coverUrl = "default_cover.png";
    
    return {
        id: index,
        title: filename,
        artist: "Tamil Hits", // Generic artist since we don't have metadata
        url: url,
        cover: coverUrl
    };
});

// Load custom songs from local storage and merge at the beginning
const customSongs = JSON.parse(localStorage.getItem('customSongs') || '[]');
songs = [...customSongs, ...songs].map((song, index) => {
    return { ...song, id: index }; // Ensure IDs match index
});

// --- State Variables ---
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// Audio Object
const audio = new Audio();
audio.volume = 1.0; // Default volume 100%

// --- DOM Elements ---
const songListContainer = document.getElementById('song-list');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const volumeBar = document.getElementById('volume-bar');
const volumeContainer = document.getElementById('volume-container');
const muteBtn = document.getElementById('mute-btn');

// Playbar Info
const currentCover = document.getElementById('current-cover');
const currentTitle = document.getElementById('current-title');
const currentArtist = document.getElementById('current-artist');

// Greeting
const greetingEl = document.getElementById('greeting');
const hour = new Date().getHours();
if (hour < 12) greetingEl.textContent = 'Good Morning';
else if (hour < 18) greetingEl.textContent = 'Good Afternoon';
else greetingEl.textContent = 'Good Evening';

// --- Initialization ---
function init() {
    renderSongs();
    loadSong(songs[currentSongIndex]);
}

// --- Render Song Cards ---
function renderSongs() {
    songListContainer.innerHTML = '';
    songs.forEach((song, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        
        card.innerHTML = `
            <img src="${song.cover}" alt="Cover" class="card-img">
            <button class="card-play-btn"><i class="fas fa-play"></i></button>
            <h3 class="card-title">${song.title}</h3>
            <p class="card-desc">${song.artist}</p>
        `;

        // Click on the play button inside card
        const playBtn = card.querySelector('.card-play-btn');
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click event
            if (currentSongIndex === index && isPlaying) {
                pauseSong();
            } else {
                currentSongIndex = index;
                loadSong(songs[currentSongIndex]);
                playSong();
            }
        });

        // Click on the card itself
        card.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playSong();
        });

        songListContainer.appendChild(card);
    });
}

// --- Player Logic ---

function loadSong(song) {
    audio.src = song.url;
    currentTitle.textContent = song.title;
    currentArtist.textContent = song.artist;
    currentCover.src = song.cover;
    currentCover.style.display = 'block';
    
    // Update card styling
    document.querySelectorAll('.card').forEach(c => c.classList.remove('playing'));
    const activeCard = document.querySelector(`.card[data-index="${song.id}"]`);
    if(activeCard) {
        activeCard.classList.add('playing');
        // Update play icon on all cards
        document.querySelectorAll('.card-play-btn i').forEach(i => {
            i.classList.remove('fa-pause');
            i.classList.add('fa-play');
        });
        if(isPlaying) {
             const activeIcon = activeCard.querySelector('.card-play-btn i');
             activeIcon.classList.remove('fa-play');
             activeIcon.classList.add('fa-pause');
        }
    }
}

function playSong() {
    isPlaying = true;
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    
    // Update active card icon
    const activeCardIcon = document.querySelector(`.card[data-index="${currentSongIndex}"] .card-play-btn i`);
    if(activeCardIcon) {
        activeCardIcon.classList.remove('fa-play');
        activeCardIcon.classList.add('fa-pause');
    }
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    
    // Update active card icon
    const activeCardIcon = document.querySelector(`.card[data-index="${currentSongIndex}"] .card-play-btn i`);
    if(activeCardIcon) {
        activeCardIcon.classList.remove('fa-pause');
        activeCardIcon.classList.add('fa-play');
    }
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    if (isPlaying) playSong();
}

function nextSong() {
    if (isShuffle) {
        let newIndex = currentSongIndex;
        while(newIndex === currentSongIndex) {
            newIndex = Math.floor(Math.random() * songs.length);
        }
        currentSongIndex = newIndex;
    } else {
        currentSongIndex++;
        if (currentSongIndex > songs.length - 1) {
            currentSongIndex = 0;
        }
    }
    loadSong(songs[currentSongIndex]);
    if (isPlaying) playSong();
}

// --- Event Listeners ---

// Play/Pause Button
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) pauseSong();
    else playSong();
});

// Prev/Next Buttons
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Shuffle
shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active');
});

// Repeat
repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle('active');
});

// Audio Time Update (Progress Bar)
audio.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audio;
    if (isNaN(duration)) return;

    // Update Progress Bar width
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Update Time Text
    currentTimeEl.textContent = formatTime(currentTime);
});

// Set Total Time when audio metadata loads
audio.addEventListener('loadedmetadata', () => {
    totalTimeEl.textContent = formatTime(audio.duration);
});

// Handle End of Song
audio.addEventListener('ended', () => {
    if (isRepeat) {
        audio.currentTime = 0;
        playSong();
    } else {
        nextSong();
    }
});

// Click on Progress Bar to Seek
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    if(isNaN(duration)) return;

    audio.currentTime = (clickX / width) * duration;
});

// Volume Control
volumeContainer.addEventListener('click', (e) => {
    const width = volumeContainer.clientWidth;
    const clickX = e.offsetX;
    const volumePercent = clickX / width;
    
    setVolume(volumePercent);
});

function setVolume(percent) {
    // Clamp between 0 and 1
    const finalVolume = Math.max(0, Math.min(1, percent));
    audio.volume = finalVolume;
    volumeBar.style.width = `${finalVolume * 100}%`;
    
    if (finalVolume === 0) {
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else if (finalVolume < 0.5) {
        muteBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else {
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
}

// Mute Toggle
let lastVolume = 1;
muteBtn.addEventListener('click', () => {
    if (audio.volume > 0) {
        lastVolume = audio.volume;
        setVolume(0);
    } else {
        setVolume(lastVolume);
    }
});

// --- Utility Functions ---
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Start App
init();
