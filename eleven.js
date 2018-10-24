/*
Let's play! 
You have to return which player won! In case of a draw return Draw!.
*/


const rps = (p1, p2) => {
  if(p1 === 'scissors' && p2 === 'paper'){
      return 'Player 1 won!';
  } else if (p1 === 'scissors' && p2 === 'rock'){
      return 'Player 2 won!';
  } else if (p1 === 'rock' && p2 === 'scissors'){
      return 'Player 1 won!';
  } else if (p1 === 'rock' && p2 === 'paper'){
      return 'Player 2 won!';
  } else if (p1 === 'paper' && p2 === 'rock'){
      return 'Player 1 won!';
  } else if (p1 === 'paper' && p2 === 'scissors'){
      return 'Player 2 won!';
  } else {
      return 'Draw!';
  }
};

/* ====Using switch conditional==== */

const rps2 = (p1, p2) => {
  // if(p1 === p2) return 'Draw';
  switch(p1+p2) {
    case 'scissorspaper': 
      return 'Player 1 won!';
    case 'scissorsrock': 
      return 'Player 2 won!';
    case 'rockscissors': 
      return 'Player 1 won!';
    case 'rockpaper': 
      return 'Player 2 won!';
    case 'paperrock': 
      return 'Player 1 won!';
    case 'paperscissors': 
      return 'Player 2 won!';
    default: 
      return 'Draw';
  }
};




