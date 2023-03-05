import profiles from '../data/berlin.json';
import { useState } from 'react';

const FaceBook = () => {
  // primera forma de quitar duplicados muy fancy
  const countryArr = [...new Set(profiles.map((elem) => elem.country))];

  //segunda forma de quitar duplicados.
  // const countries = profiles.map((elem) => elem.country);
  // const unique = [...countries].filter(
  //   (elem, i) => countries.indexOf(elem) === i
  // );

  //tercera forma. No tan elegante pero same
  // let countryFiltered = [];
  // profiles
  //   .map((elem) => elem.country)
  //   .forEach((elem) => {
  //     if (!countryFiltered.includes(elem)) {
  //       countryFiltered.push(elem);
  //     }
  //   });

  const [countrySelected, setCountrySelected] = useState('');

  const handleCountry = (country) => {
    setCountrySelected(country);
  };

  return (
    <div className="container">
      {countryArr.map((country, i) => {
        const color = countrySelected === country ? 'lightblue' : 'white';
        return (
          <button
            style={{ backgroundColor: color }}
            key={i}
            onClick={() => handleCountry(country)}
          >
            {country}
          </button>
        );
      })}

      {profiles.map((elem, i) => {
        const color = countrySelected === elem.country ? 'lightblue' : 'white';
        return (
          <div className="card" key={i} style={{ backgroundColor: color }}>
            <img
              src={elem.img}
              alt="profile"
              style={{ float: 'left', width: '90px', marginRight: '10px' }}
            />
            <p>First Name:{elem.firstName}</p>
            <p>Last Name:{elem.lastName}</p>
            <p>Country Name:{elem.country}</p>
            <p>Type:{elem.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FaceBook;
