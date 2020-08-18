// ========== Game Logic =============

// Random for computer play
function random() {
  return Math.floor(Math.random() * 3)
}

// Generates computer move
function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  return choices[random()];
}

// Determine result of round
function playRound(playerWord, computerWord) {
  let choices = ['Rock', 'Paper', 'Scissors'];

  // Check input is valid
  if (choices.includes(playerWord) == false) {
    return 3;
  }

  if (playerWord === computerWord) {
      // Draw, same choices
      return 2;
  } else {
    if (playerWord === 'Rock') {
      if (computerWord === 'Paper') {
        // P: Rock vs C: Paper
        return 0;
      } else {
        // P: Rock vs C: Scissors
        return 1;
      }
    } else if (playerWord === 'Scissors') {
      if (computerWord === 'Paper') {
        // P: Scissors vs C: Paper
        return 1;
      } else {
        // P: Scissors vs C: Rock
        return 0;
      }
    } else {
      // playerWord == Paper
      if (computerWord === 'Rock') {
        // P: Paper vs C: Rock
        return 1;
      } else {
        // P: Paper vs C: Scissors
        return 0;
      }
    }
  }
}

// set text in resultBox based on result of game
function returnResults(result, playerSelection, computerSelecton) {
  // increment/control game logic based on results of round

  let resultDiv = document.querySelector('#resultDiv');
  // RETURN DEFINITIONS:
  // --------------------------------
  // 0 will signify win for computer
  // 1 will signify win for player
  // 2 will signify draw, nobody will gain a win
  // 3 will signify invalid option, choose again
  switch(result) {
    case 0:
      resultDiv.textContent = `You Lose! ${computerSelecton} beats ${playerSelection}`;
      resultDiv.style.backgroundColor = 'red';
      break;
    case 1:
      resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelecton}`;
      resultDiv.style.backgroundColor = 'green';
      break;
    case 2:
      resultDiv.textContent = `Draw! ${playerSelection} ties ${computerSelecton}`;
      resultDiv.style.backgroundColor = 'blue';
      break;
    case 3:
      resultDiv.textContent = `Invalid Selection! Please choose again!`;
      resultDiv.style.backgroundColor = 'blue';
      break;
  }
}

// Play an iteration of the game
function playGame(playerSelection) {

  let computerSelecton = computerPlay();
  // Run round
  let result = playRound(playerSelection, computerSelecton);

  // Print out end of game results based on result
  returnResults(result, playerSelection, computerSelecton);

}



// ================ Page Layout =================

const body = document.querySelector('body');
body.style.display = 'flex';
body.style.width = '100%';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';

let headerDiv = document.createElement('div');
headerDiv.style.backgroundColor = 'black';
headerDiv.style.color = 'white';
headerDiv.style.padding = '2% 0%';
headerDiv.style.display = 'flex';
headerDiv.style.justifyContent = 'center';
headerDiv.textContent = "Rock Paper Scissors!"



let buttonDiv = document.createElement('div');
buttonDiv.style.display = 'flex';
buttonDiv.style.justifyContent = 'center';


let rockButton = document.createElement('button');
let paperButton = document.createElement('button');
let scissorButton = document.createElement('button');

rockButton.setAttribute('id', 'Rock')
paperButton.setAttribute('id', 'Paper')
scissorButton.setAttribute('id', 'Scissors')

let resultDiv = document.createElement('div');
resultDiv.setAttribute('id', 'resultDiv')
resultDiv.style.display = 'flex';
resultDiv.style.padding = '1% 0%';
resultDiv.style.justifyContent = 'center';

buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorButton);


body.appendChild(headerDiv);
body.appendChild(buttonDiv);
body.appendChild(resultDiv);


const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  button.style.padding = '2%';
  button.textContent = button.id
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
      playGame(button.id)
  });
});
