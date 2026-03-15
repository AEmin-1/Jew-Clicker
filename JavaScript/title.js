'use strict'

let titleMusic = document.getElementById("titleMusic")
titleMusic.onvolumechange = 1.0

let bodyy = document.getElementById("bodyy")

bodyy.addEventListener("mousemove", () =>{

    titleMusic.play()
})


