let songindex = 0;
let audioelement = new Audio("Files/songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let mastersongname = document.getElementById("mastersongname");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName("songitem"));

let songs = [
    { songname: "Warrio - Mortals ", filepath: "Files/songs/1.mp3", coverpath: "Files/covers/1.jpg" },
    { songname: "Cielo - Huma-Huma", filepath: "Files/songs/2.mp3", coverpath: "Files/covers/2.jpg" },
    { songname: "DEAF KEV - Incincible", filepath: "Files/songs/3.mp3", coverpath: "Files/covers/3.jpg" },
    { songname: "Different Heaven & EHIDE - My Heart", filepath: "Files/songs/4.mp3", coverpath: "Files/covers/4.jpg" },
    { songname: "Janji-Heroes-Tonight", filepath: "Files/songs/5.mp3", coverpath: "Files/covers/5.jpg" },
    { songname: "Rabba - Salam-e-ishq", filepath: "Files/songs/6.mp3", coverpath: "Files/covers/6.jpg" },
    { songname: "Sakhiyaan - Salam-e-ishq", filepath: "Files/songs/7.mp3", coverpath: "Files/covers/7.jpg" },
    { songname: "Tumahri Kasam - Salam-e-ishq", filepath: "Files/songs/8.mp3", coverpath: "Files/covers/8.jpg" },
    { songname: "Nahi Jeena - Salam-e-ishq", filepath: "Files/songs/9.mp3", coverpath: "Files/covers/9.jpg" },
    { songname: "Man Kare Toh - Salam-e-ishq", filepath: "Files/songs/10.mp3", coverpath: "Files/covers/10.jpg" }
];

songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    let audio = new Audio(songs[i].filepath);

    // Event listener to wait until the audio is loaded
    audio.addEventListener('loadedmetadata', function() {
        // Set the duration once the audio is loaded
        element.getElementsByClassName("Duration")[0].innerText = formatTime(audio.duration);
    });

    // Load the audio
    audio.load();
});

// Function to format time in minutes:seconds format
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

//Handle play/pause
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        updatePlayIcons(true);
    } else {
        audioelement.pause();
        updatePlayIcons(false);
    }
});

audioelement.addEventListener('timeupdate', () => {
    //seek bar update
    let progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;
});

myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = (myprogressbar.value * audioelement.duration) / 100;
});

const makeallplay = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeallplay();
        songindex = parseInt(e.target.id);
        audioelement.src = `Files/songs/${songindex + 1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        updatePlayIcons(true);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
    });
});

document.getElementById('next').addEventListener("click", () => {
    if (songindex >= 9) {
        songindex = 0;
    } else {
        songindex += 1;
    }
    updateSong();
});

document.getElementById('previous').addEventListener("click", () => {
    if (songindex <= 0) {
        songindex = 0;
    } else {
        songindex -= 1;
    }
    updateSong();
});

function updateSong() {
    audioelement.src = `Files/songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    updatePlayIcons(true);
    updateSongItemIcons();
}

function updatePlayIcons(isPlaying) {
    if (isPlaying) {
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    } else {
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
        makeallplay();
    }
}

function updateSongItemIcons() {
    makeallplay();
    document.getElementById(songindex).classList.remove("fa-circle-play");
    document.getElementById(songindex).classList.add("fa-circle-pause");
}
