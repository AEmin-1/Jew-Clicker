'use strict'

let titleMusic = document.getElementById("titleMusic")
titleMusic.onvolumechange = 0.6

let bodyy = document.getElementById("bodyy")

bodyy.addEventListener("mousemove", () =>{

    titleMusic.play()
})


