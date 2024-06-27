let songindex=0;
let audioelement = new Audio("Files/songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar")

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

// audioelement.play()

myprogressbar.addEventListener('timeu')