const SingleColorPicker = ({ color, value, handleColors }) => {
  let rgbColor = ``;

  switch (color) {
    case 'r':
      rgbColor = `rgb(${value},0,0)`;
      break;
    case 'g':
      rgbColor = `rgb(0,${value},0)`;
      break;
    case 'b':
      rgbColor = `rgb(0,0,${value})`;
      break;
  }
  return (
    <div>
      <div style={{ backgroundColor: rgbColor }}>box</div>

      <label>{color}</label>
      <input
        type="number"
        min="0"
        max="255"
        name={color}
        value={value}
        onChange={handleColors}
      />
    </div>
  );
};

export default SingleColorPicker;
