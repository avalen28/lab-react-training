import masterCard from '../assets/images/master-card.png';
import visa from '../assets/images/visa.png';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const creditNum = `**** **** **** ${number.slice(12)}`;
  let month = '';
  let year = '';
  if (expirationMonth < 10) {
    month = '0' + expirationMonth;
  } else {
    month = expirationMonth;
  }

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img src={type === 'Visa' ? visa : masterCard} alt={type} />
      <p>{creditNum}</p>
      <span>
        <p>{`Expires ${month}/${expirationYear.toString().slice(2)}`}</p>
        <p>{bank}</p>
      </span>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
