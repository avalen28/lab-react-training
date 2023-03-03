const NumbersTable = ({ limit }) => {
  //   const numberArr = new Array(limit);
  //   const patata = numberArr.map((elem, i) => elem[i]);
  let cosa = [];
  for (let i = 1; i < limit + 1; i++) {
    cosa.push(i);
  }
  console.log(cosa);

  return (
    <div>
      {cosa.map((elem) => {
        if (elem % 2 === 0) {
          return (
            <div key={elem} style={{ backgroundColor: 'red' }}>
              {elem}
            </div>
          );
        } else {
          return (
            <div key={elem} style={{ backgroundColor: 'white' }}>
              {elem}
            </div>
          );
        }
      })}
    </div>
  );
};

export default NumbersTable;
