import { useState } from 'react';

const SignupPage = () => {
  const [emailSelected, setEmailSelected] = useState('');
  const [passwordSelected, setPasswordSelected] = useState('');
  const [nationalitySelected, setNationalitySelected] = useState('');
  const [showSalute, setShowSalute] = useState(false);

  const handleEmailSelected = (e) => {
    setEmailSelected(e.target.value);
  };
  const handlePasswordSelected = (e) => {
    setPasswordSelected(e.target.value);
  };
  const handleNationality = (e) => {
    setNationalitySelected(e.target.value);
  };
  const salute = () => {
    if (nationalitySelected === 'de') {
      return 'Hallo';
    } else if (nationalitySelected === 'fr') {
      return 'Bonjour';
    } else if (nationalitySelected === 'en') {
      return 'Hello';
    }
  };

  const handleform = (e) => {
    e.preventDefault();
    setShowSalute(true);
  };
  return (
    <div>
      <form action="" onSubmit={handleform}>
        <label> Email</label>
        <input
          type="email"
          name="email"
          placeholder="your email here"
          onChange={handleEmailSelected}
          value={emailSelected}
        />
        <label> Password</label>
        <input
          type="password"
          name="password"
          placeholder="your email"
          onChange={handlePasswordSelected}
          value={passwordSelected}
        />
        <label> Nationality</label>
        <select name="nationality" onChange={handleNationality}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <button type="submit"> Sign up</button>
      </form>
      {showSalute && (
        <div>
          <p>{salute()}</p>
          <p> Your email adress is {emailSelected}</p>
          <p>Your email adress is correct</p>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
