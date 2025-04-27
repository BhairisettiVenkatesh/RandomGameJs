const randomNum=parseInt(Math.random()*100 + 1);
const userInput=document.querySelector('#text-guess');
const submitGame=document.querySelector('#submit')
const guesslist=document.querySelector('.prev-guess');
const remainingResult=document.querySelector('.last-result');
const predictval=document.querySelector('.results');
const startGame=document.querySelector('.result');

const p=document.createElement('p')

let prevguess=[];
let nguess=1;
let playGame=true;
//functions

if(playGame){
      submitGame.addEventListener('click',function(e){
            e.preventDefault();
            const guess=parseInt(userInput.value);
            validateGame(guess);
      });
}
function validateGame(guess){
if(isNaN(guess)){
      alert('Please enter a valid number');
}
else if(guess<1){
      alert('Please enter a valid number');

}
else if(guess>100)
{
      alert('Please enter num in range of 1 -100');
}
  prevguess.push(guess);
if(nguess>10){
      display(guess)
    
      displayGuess(`game over!!.Random number was ${randomNum}`)
      endGame()
}
else{
      display(guess)
      checkGame(guess)
}

}
function checkGame(guess){
 if(guess===randomNum){
       displayGuess(`Congratulations!You got it right`);
       endGame();
 }
 else if(guess>randomNum){
       displayGuess(' Number is Too high');
 }
 else if(guess<randomNum){
       displayGuess('Number is Too low');
 }
}

function display(guess){
      // dom manipulation goes here
      userInput.value='';
      guesslist.innerHTML+=`${guess} `;
      nguess++;
      remainingResult.innerHTML=`${11-nguess} `;
}

function displayGuess(message){
       predictval.innerHTML=`<h2>${message}</h2>`;
}

function newGame(){
      const newGameButton=document.querySelector('#new-game');
      newGameButton.addEventListener('click',function(){
            nguess=1;
            prevguess=[];
            p.innerHTML='';
            randomNum=parseInt(Math.random()*100 + 1);
            predictval.innerHTML='';
            guesslist.innerHTML='';
            userInput.removeAttribute('disabled');
            userInput.value='';
            startGame.removeChild(p);
            playGame=true;
      });               

}

function endGame(){
userInput.value='';
userInput.setAttribute('disabled','');
p.classList.add('button')
p.innerHTML=`<h2 id="new-game">Start new game</h2>`;
startGame.appendChild(p);
playGame
newGame()=false;
}





