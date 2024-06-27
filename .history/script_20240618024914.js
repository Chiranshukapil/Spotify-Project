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
    if(audioelement)
})



// audioelement.play()

audioelement.addEventListener('timeupdate', ()=>{
    console.log("")
})