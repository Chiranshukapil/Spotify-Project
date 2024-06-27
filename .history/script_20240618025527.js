let songindex=0;
let audioelement = new Audio("Files/songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");

let songs = [
    {songname: "Salam-e-ishq", filepath: "Files/songs/1.mp3", coverpath: "Files/covers/1.jpg"},
    {songname: "Salam-e-ishq", filepath: "Files/songs/1.mp3", coverpath: "Files/covers/1.jpg"},
    {songname: "Salam-e-ishq", filepath: "Files/songs/1.mp3", coverpath: "Files/covers/1.jpg"},
    {songname: "Salam-e-ishq", filepath: "Files/songs/1.mp3", coverpath: "Files/covers/1.jpg"},
    {songname: "Salam-e-ishq", filepath: "Files/songs/1.mp3", coverpath: "Files/covers/1.jpg"},
    {songname: "Salam-e-ishq", filepath: "Files/songs/1.mp3", coverpath: "Files/covers/1.jpg"},
    {songname: "Salam-e-ishq", filepath: "Files/songs/1.mp3", coverpath: "Files/covers/1.jpg"},
    {songname: "Salam-e-ishq", filepath: "Files/songs/1.mp3", coverpath: "Files/covers/1.jpg"}
]

//Handle play/pause
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play()
        masterplay.classList.remove("fa-circle-play")
        masterplay.classList.add("fa-circle-pause")
    }
    else{
        audioelement.pause()
        masterplay.classList
    }
})


audioelement.addEventListener('timeupdate', ()=>{
    console.log("time update")
    //seek bar update

})