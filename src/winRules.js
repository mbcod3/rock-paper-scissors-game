export default function winRules(props) {
  const {gameType, userVariant, houseVariant} = props

  if (userVariant === houseVariant) return 0;

  if (gameType === 3) {
    if (userVariant === 'scissor') {
      if (houseVariant === 'paper') return 1;
      else if (houseVariant === 'rock') return -1
    }
    if (userVariant === 'paper') {
      if (houseVariant === 'rock') return 1;
      else if (houseVariant === 'scissor') return -1
    }
    if (userVariant === 'rock') {
      if (houseVariant === 'scissor') return 1;
      else if (houseVariant === 'paper') return -1
    }
  }

  
  if (gameType === 5) {
    if (userVariant === 'scissor') {
      if (houseVariant === 'paper') return 1;
      else if (houseVariant === 'rock') return -1;
      else if (houseVariant === 'lizard') return 1;
      else if (houseVariant === 'spock') return -1;
    }
    if (userVariant === 'paper') {
      if (houseVariant === 'rock') return 1;
      else if (houseVariant === 'lizard') return -1;
      else if (houseVariant === 'spock') return 1;
      else if (houseVariant === 'scissor') return -1;
    }
    if (userVariant === 'rock') {
      if (houseVariant === 'lizard') return 1;
      else if (houseVariant === 'spock') return -1;
      else if (houseVariant === 'scissor') return 1
      else if (houseVariant === 'paper') return -1;
    }
    if (userVariant === 'lizard') {
      if (houseVariant === 'spock') return 1; 
      else if (houseVariant === 'scissor') return -1;
      else if (houseVariant === 'paper') return 1;
      else if (houseVariant === 'rock') return -1;
    }
    if (userVariant === 'spock') {
      if (houseVariant === 'scissor') return 1
      else if (houseVariant === 'paper') return -1;
      else if (houseVariant === 'rock') return 1;
      else if (houseVariant === 'lizard') return -1;
    }
  }
}