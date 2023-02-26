const BoxColor = (props) => {
  const { r, g, b } = props;
  const hexFunc = () => {
    let rTrans = r.toString(16) != 0 ? r.toString(16) : '00';
    let gTrans = g.toString(16) != 0 ? g.toString(16) : '00';
    let bTrans = b.toString(16) != 0 ? b.toString(16) : '00';

    return `#${rTrans}${gTrans}${bTrans}`;
  };
  const backGround = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    textAlign: 'center',
  };
  return (
    <div style={backGround} className="card">
      <p> {backGround.backgroundColor}</p>
      <p>{hexFunc()}</p>
    </div>
  );
};

export default BoxColor;
