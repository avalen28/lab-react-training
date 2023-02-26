import Rating from './Rating';

const DriverCard = (props) => {
  const {
    car: { model, licensePlate },
    name,
    rating,
    img,
  } = props;
  return (
    <div className="card driver-card">
      <img src={img} alt={`${name} profile`} width="150px" />
      <div className="driver-info">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <h4>{`${model}-${licensePlate}`}</h4>
      </div>
    </div>
  );
};

export default DriverCard;
