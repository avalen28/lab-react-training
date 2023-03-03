import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import { useState } from 'react';

const Dice = () => {
  let diceNum = Math.round(Math.random() * (5 - 1) + 1);
  const randomDice = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [diceSelected, setDice] = useState(randomDice[diceNum]);

  const handleDice = () => {
    setDice(emptyDice);
    console.log(diceNum);
    setTimeout(() => setDice(randomDice[diceNum]), 1000);
  };
  return (
    <img
      src={diceSelected}
      style={{ width: '150px', padding: '10px' }}
      alt="dice selected"
      onClick={handleDice}
    />
  );
};

export default Dice;
