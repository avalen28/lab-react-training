import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRvalue] = useState(0);
  const [gValue, setGvalue] = useState(0);
  const [bValue, setBvalue] = useState(0);

  const handleColors = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'r':
        setRvalue(value);
        break;
      case 'g':
        setGvalue(value);
        break;
      case 'b':
        setBvalue(value);
        break;
    }
  };

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} handleColors={handleColors} />
      <SingleColorPicker color="g" value={gValue} handleColors={handleColors} />
      <SingleColorPicker color="b" value={bValue} handleColors={handleColors} />
      <div style={{ backgroundColor: `rgb(${rValue},${gValue},${bValue})` }}>
        {`rgb(${rValue}, ${gValue}, ${bValue})`}
      </div>
    </div>
  );
};

export default RGBColorPicker;
