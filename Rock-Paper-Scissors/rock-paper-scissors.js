let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

let userChoice = '';
let compChoice = '';
let result = '';

updateeScore();
showResult();

  /*Score Saving Function*/
function saveScore() {
  localStorage.setItem('score', JSON.stringify(score));
}

  /*Update Score Function*/
function updateeScore() {
  const Score = document.querySelector('.js-score');
  Score.innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

  /*Show Result Function*/
function showResult() {
  const Result = document.querySelector('.js-result');
  Result.innerHTML = `Result: ${result}`;
}

  /*Loading Moves Function*/
/*function movesLoading(){
  let i = 0;
  while(true){
    console.log(i);
    i++;
    if (i > 2){
      i = 0;
    }
  }
}

setInterval(()=>{movesLoading();}, 2000);*/

  /*Show Moves Function*/
function showMoves(){
  const Moves = document.querySelector('.js-moves');
  Moves.innerHTML = `You <img style= "height:30px;" src = "icons/${userChoice}.png"> : <img style= "height:30px;" src = "icons/${compChoice}.png">
  Computer`;
}

  /*Computer Chance Picker Function*/
function computerPick() {
  const randnum = Math.random();
  if (randnum >= 0 && randnum < 1/3) {
    compChoice = 'Rock';
  } else if (randnum >= 1/3 && randnum < 2/3) {
    compChoice = 'Paper';
  } else {
    compChoice = 'Scissors';
  }
  return compChoice;
}

  /*Winner Decider Function*/
function determineWinner(user, computer) {
  if (user === computer) {
    return 'Tie';
  } else if (
    (user === 'Rock' && computer === 'Scissors') ||
    (user === 'Paper' && computer === 'Rock') ||
    (user === 'Scissors' && computer === 'Paper')
  ) {
    return 'You Win';
  } else {
    return 'You Lose';
  }
}

  /*Autoplay Function*/
let isAutoplay = false;
let intervalID;

function autoplay(){
  if(!isAutoplay){
    intervalID = setInterval(() => {
      computerPick();
      userChoice = computerPick();
      playGame(userChoice);
    }, 1000);
    document.querySelector('.autoplay-button').innerHTML = 'Stop Auto-Play';
    isAutoplay = true;
  }else{
    clearInterval(intervalID);
    isAutoplay = false;
    document.querySelector('.autoplay-button').innerHTML = 'Auto-Play';
  }
}

  /*Buttons EventListeners*/

document.querySelector('.rock-button').addEventListener('click',() => {playGame('Rock')});
document.querySelector('.paper-button').addEventListener('click',() => {playGame('Paper')});
document.querySelector('.scissors-button').addEventListener('click',() => {playGame('Scissors')});
document.querySelector('.reset-btn').addEventListener('click',() => {resetScore()});
document.querySelector('.autoplay-button').addEventListener('click',() => {autoplay()});
document.body.addEventListener('keydown',(event) => {
  if (event.key === 'r'){
    playGame('Rock');
  }else if (event.key === 'p'){
    playGame('Paper');
  }else if(event.key === 's'){
    playGame('Scissors');
  }
});
  /*Update Score Function*/

function updateScore(result) {
  if (result === 'You Win') {
    score.wins += 1;
  } else if (result === 'You Lose') {
    score.loses += 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }
  
  saveScore();
}

  /*Play Game Function*/

function playGame(choice) {
  userChoice = choice;
  computerPick();
  
  result = determineWinner(userChoice, compChoice);
  
  showResult();
  showMoves();
  updateScore(result);
  updateeScore();
}

  /*Reset Score Function*/

function resetScore() {
  score = {
    wins: 0,
    loses: 0,
    ties: 0
  };
  
  saveScore();
  updateeScore();
}