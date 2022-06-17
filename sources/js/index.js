const containerPlayer01 = document.querySelector(".container--player01");
const containerPlayer02 = document.querySelector(".container--player02");

const btnSaveScore = document.querySelector(".container--hold-score");
const btnRolingTheDice = document.querySelector(".container--rolling-the-dice")

const dices = {
  1: document.querySelector(".one"),
  2: document.querySelector(".two"),
  3: document.querySelector(".three"),
  4: document.querySelector(".four"),
  5: document.querySelector(".five"),
  6: document.querySelector(".six"),
}


const currentScores = {
  pl1: document.querySelector(".current-score01"),
  pl2: document.querySelector(".current-score02")
}


const fullScores = {
  pl1: document.querySelector(".full-score01"),
  pl2: document.querySelector(".full-score02")
}

const multiplierTextContainer = document.querySelector(".multiplier--text")
const newGame = document.querySelector(".container--new-game")


let timesWithOut1 = 0
let multiplier = 1
let pScorePlayer01 = 0 
let pScorePlayer02 = 0

btnRolingTheDice.addEventListener('click', e=>{

  let randomNumber = Math.trunc(Math.random() * 6) + 1
  console.log(randomNumber, "inicial")

  let mantainOrDiscardNumb 

  


  // to make a little harder to get 1 or 6
  if(randomNumber === 1 || randomNumber === 6){
    mantainOrDiscardNumb = Math.random()

    console.log(mantainOrDiscardNumb,"manter???")
    
    mantainOrDiscardNumb >= 0.5 ? randomNumber = Math.trunc(Math.random() * 6) + 1 : ""

    console.log(randomNumber,"num dps da verificação")
  }

  


  // to add hidden to every dice
 for(i = 1; i <= 6; i++){
  dices[i].classList.add("hidden")
 }
 // to remove hidden from the choosed number
 dices[randomNumber].classList.remove("hidden")

 timesWithOut1 >= 10 ? multiplier = 1.5:""
 timesWithOut1 >= 15 ? multiplier = 2:""
 timesWithOut1 >=25 ? multiplier = 3:""
 timesWithOut1 >= 35 ? multiplier = 100:0
 

 multiplierTextContainer.textContent = multiplier

 if(containerPlayer01.classList.contains("active-PLayer")){
   console.log(pScorePlayer01 + randomNumber)
   pScorePlayer01 = pScorePlayer01 + randomNumber * multiplier
  currentScores.pl1.textContent = pScorePlayer01
  
 }else{
    pScorePlayer02 = pScorePlayer02 + randomNumber * multiplier
   currentScores.pl2.textContent = pScorePlayer02
   
 }

 
 


  // changing the player of the turn
  if(randomNumber === 1){
    containerPlayer01.classList.toggle("active-PLayer");
    containerPlayer02.classList.toggle("active-PLayer");
    timesWithOut1 = 0

    pScorePlayer01 = 0
    pScorePlayer02 = 0
    currentScores.pl1.textContent = pScorePlayer01
    currentScores.pl2.textContent = pScorePlayer02
    multiplier = 1
    multiplierTextContainer.textContent = 1
  }



  // to increase the number of times with out haiving a 1
  timesWithOut1++
  
})


let fullScorePl1 = 0
let fullScorePl2 = 0

btnSaveScore.addEventListener('click', e=>{

  containerPlayer01.classList.toggle("active-PLayer");
  containerPlayer02.classList.toggle("active-PLayer");

  fullScorePl1 = fullScorePl1 + pScorePlayer01
  fullScores.pl1.textContent = fullScorePl1

  fullScorePl2 = fullScorePl2 + pScorePlayer02
  fullScores.pl2.textContent = fullScorePl2

  

   pScorePlayer01 = 0 
   pScorePlayer02 = 0
   multiplier = 1
   timesWithOut1 = 0
   multiplierTextContainer.textContent = multiplier

   currentScores.pl1.textContent = pScorePlayer01
   currentScores.pl2.textContent = pScorePlayer02

})


newGame.addEventListener("click", e=>{
  document.location.reload()
})