const Random = (props) => {
  const { min, max } = props;
  const randomInteger = () => {
    return Math.round(Math.random() * (max - min) + min);
  };

  return (
    <div className="card">
      Random value between {min} and {max} {`=>`} {randomInteger()}
    </div>
  );
};

export default Random;
