const IdCard = (props) => {
  console.log(props);
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="id-card">
      <img
        src={picture}
        alt={`${firstName} profile`}
        className="id-picture"
        width="150px"
      />
      <div className="id-info">
        <h3>
          <span>First name:</span> {firstName}
        </h3>
        <h3>
          <span>Last name: </span>
          {lastName}
        </h3>
        <h3>
          <span>Gender: </span>
          {gender}
        </h3>
        <h3>
          <span>Height: </span>
          {height / 100}m
        </h3>
        <h3>
          <span>Birth: </span>
          {birth.toDateString()}
        </h3>
      </div>
    </div>
  );
};
export default IdCard;
