import profiles from '../data/berlin.json';

const FaceBook = () => {
  return (
    <div className="container">
      {profiles.map((elem) => {
        return (
          <div className="card">
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
