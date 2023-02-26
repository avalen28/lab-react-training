const Rating = (props) => {
  const { children } = props;
  const starFunc = () => {
    const value = Math.round(children);
    const emptyStar = '☆'.repeat(5 - value);
    const filledStar = '★'.repeat(value);
    return filledStar + emptyStar;
  };

  return (
    <div>
      <h1>{starFunc()}</h1>
    </div>
  );
};

export default Rating;
