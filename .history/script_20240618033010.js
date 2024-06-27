let songindex=0;
let audioelement = new Audio("Files/songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");

let songs = [
    {songname: "Warrio - Mortals (feat. Laura Brehm)", filepath: "Files/songs/1.mp3", coverpath: "Files/covers/1.jpg"},
    {songname: "Cielo - Huma-Huma", filepath: "Files/songs/2.mp3", coverpath: "Files/covers/2.jpg"},
    {songname: "DEAF KEV - Incincible", filepath: "Files/songs/3.mp3", coverpath: "Files/covers/3.jpg"},
    {songname: "Different Heaven - ", filepath: "Files/songs/4.mp3", coverpath: "Files/covers/4.jpg"},
    {songname: "Salam-e-ishq", filepath: "Files/songs/5.mp3", coverpath: "Files/covers/5.jpg"},
    {songname: "Salam-e-ishq", filepath: "Files/songs/6.mp3", coverpath: "Files/covers/6.jpg"},
    {songname: "Salam-e-ishq", filepath: "Files/songs/7.mp3", coverpath: "Files/covers/7.jpg"},
    {songname: "Salam-e-ishq", filepath: "Files/songs/8.mp3", coverpath: "Files/covers/8.jpg"}
]

//Handle play/pause
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play()
        masterplay.classList.remove("fa-circle-play")
        masterplay.classList.add("fa-circle-pause")
        gif.style.opacity = 1
        masterplay.style.color = "lightblue"
    }
    else{
        audioelement.pause()
        masterplay.classList.remove("fa-circle-pause")
        masterplay.classList.add("fa-circle-play")
        gif.style.opacity = 0
        masterplay.style.color = "white" 
    }
})


audioelement.addEventListener('timeupdate', ()=>{
    //seek bar update
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
    myprogressbar.value = progress;
})


myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = (myprogressbar.value * audioelement.duration)/100
})

