import { useState } from 'react';

const Likebutton = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);
  const colours = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleColor = () => {
    if (color < 5) {
      setColor(color + 1);
    } else {
      setColor(0);
    }
  };

  const handleCount = () => {
    setCount(count + 1);
    handleColor();
  };

  return (
    <button
      style={{ backgroundColor: colours[color] }}
      onClick={handleCount}
    >{`${count} likes`}</button>
  );
};

export default Likebutton;
