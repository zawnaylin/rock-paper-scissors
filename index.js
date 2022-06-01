function computerPlay() {
  const outcomes = [
    "Rock",
    "Paper",
    "Scissors"
  ]
  const number = Math.floor(Math.random() * 3);
  return outcomes[number];
}

function decideForRock(computerSelection) {
  switch (computerSelection) {
    case "Scissors":
      return 1;
    case "Paper": 
      return -1;
    default: 
      return 0;
  }
}

function decideForPaper(computerSelection) {
  switch (computerSelection) {
    case "Scissors":
      return -1;
    case "Paper": 
      return 0;
    default: 
      return 1;
  }
}

function decideForScissors(computerSelection) {
  switch (computerSelection) {
    case "Scissors":
      return 0;
    case "Paper": 
      return 1;
    default: 
      return -1;
  }
}

function playRound(playerSelection, computerSelection) {
  let output;
  switch(playerSelection.toLowerCase()) {
    case "rock":
      output = decideForRock(computerSelection);
      break;
    case "paper":
      output = decideForPaper(computerSelection);
      break;
    case "scissors":
      output = decideForScissors(computerSelection);
      break;
    default: 
      return "Invalid input";
  }
  const cappedPlayerSelection = playerSelection.toLowerCase()
                                                .replace(playerSelection[0], playerSelection[0].toUpperCase());

  switch (output) {
    case -1:
      return `You Lose! ${computerSelection} beats ${cappedPlayerSelection}`;
    case 0: 
      return `Draw! Nobody wins`;
    default: 
      return `You Win! ${cappedPlayerSelection} beats ${computerSelection}`
  }
}

function game() {
  for (let i = 0 ; i < 5; i++) {
    const playerSeletion = prompt("Enter your play");
    console.log(playRound(playerSeletion, computerPlay()));
  }
  console.log("Thanks for playing!");
}

game();