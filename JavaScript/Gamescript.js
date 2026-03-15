'use strict'


//Objekte
let davidstern = document.getElementById("davidstern")
let dreidel = document.getElementById("dreidel")
let kippah = document.getElementById("kippah")
let menora = document.getElementById("menora")
let torah = document.getElementById("torah")
let GoVo = document.getElementById("GoVo")
let BIGJAHU = document.getElementById("BIGJAHU")

//Preise
let dreidelPreis = document.getElementById("dreidelPreis")
let kippahPreis = document.getElementById("kippahPreis")
let menoraPreis = document.getElementById("menoraPreis")
let torahPreis = document.getElementById("torahPreis")
let GoVoPreis = document.getElementById("GoVoPreis")
let BIGJAHUPreis = document.getElementById("BIGJAHUPreis")
    

//sounds
let davidsternAudio = new Audio('../sounds/jew_sound_effect.mp3')
let bgMusic = document.getElementById("bgMusic")

//Punktesystem
let points = 1
let pointsPassive = 0

//scoreboard
let scoreboardPoints = document.getElementById("points")

//Davidstern
davidstern.addEventListener("click", ()=>{

    davidsternAudio.play()
    scoreboardPoints.innerText = (parseInt(scoreboardPoints.innerText) + points)
})

davidstern.addEventListener("dblclick", (event) =>{
    event.preventDefault()
})

davidstern.addEventListener("contextmenu",  (event) =>{
    event.preventDefault()
})

function passivesEinkommen(){
    scoreboardPoints.innerText = (parseInt(scoreboardPoints.innerText) + pointsPassive)

}

//passives einkommen
setInterval(passivesEinkommen, 1000)

//Dreidel
dreidel.addEventListener("click", () =>{
    if(scoreboardPoints.innerText > (parseInt(dreidelPreis.innerText))){
         scoreboardPoints.innerText = (parseInt(scoreboardPoints.innerText) - parseInt(dreidelPreis.innerText) )
        pointsPassive = Math.round(parseFloat(pointsPassive) + 0.88)
        dreidelPreis.innerText = Math.round(parseInt(dreidelPreis.innerText) * 1.1)
    }else{
        alert("not enough Jew Coins")
    }
})

//Kippah
kippah.addEventListener("click", () =>{
    if(scoreboardPoints.innerText > (parseInt(kippahPreis.innerText))){
         scoreboardPoints.innerText = (parseInt(scoreboardPoints.innerText) - parseInt(kippahPreis.innerText) )
        pointsPassive = (parseInt(pointsPassive) + 4.5)
        kippahPreis.innerText = Math.round(parseInt(kippahPreis.innerText)* 1.1)
    }else{
        alert("not enough Jew Coins")
    }
})

//Menora
menora.addEventListener("click", () =>{
    if(scoreboardPoints.innerText > (parseInt(menoraPreis.innerText))){
         scoreboardPoints.innerText = (parseInt(scoreboardPoints.innerText) - parseInt(menoraPreis.innerText) )
        pointsPassive = Math.round(parseFloat(pointsPassive) + 25)
        menoraPreis.innerText = Math.round(parseInt(menoraPreis.innerText) * 1.1)
    }else{
        alert("not enough Jew Coins")
    }
})

//Torah
torah.addEventListener("click", () =>{
    if(scoreboardPoints.innerText > (parseInt(torahPreis.innerText))){
         scoreboardPoints.innerText = (parseInt(scoreboardPoints.innerText) - parseInt(torahPreis.innerText) )
        pointsPassive = Math.round(parseFloat(pointsPassive) + 300)
        torahPreis.innerText = Math.round(parseInt(torahPreis.innerText) * 1.1)
    }else{
        alert("not enough Jew Coins")
    }
})

//Goldene Vorhaut
GoVo.addEventListener("click", () =>{
    if(scoreboardPoints.innerText > (parseInt(GoVoPreis.innerText))){
         scoreboardPoints.innerText = (parseInt(scoreboardPoints.innerText) - parseInt(GoVoPreis.innerText) )
        pointsPassive = Math.round(parseFloat(pointsPassive) + 2000)
        GoVoPreis.innerText = Math.round(parseInt(GoVoPreis.innerText) * 1.1)
    }else{
        alert("not enough Jew Coins")
    }
})

//BIG JAHU
BIGJAHU.addEventListener("click", () =>{
    alert("This part of the game is not available yet...")
})


//background music
bgMusic.volume = 0.88
let bodyy = document.getElementById("bodyy")

bodyy.addEventListener("mouseover", () =>{
    bgMusic.play()
})