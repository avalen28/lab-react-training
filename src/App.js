import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <IdCard
        lastName="Horseman"
        firstName="Bojack"
        gender="horse-male"
        height={178}
        birth={new Date('1968-07-14')}
        picture="https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/02/05/5fa9031378b30.jpeg"
      />
    </div>
  );
}

export default App;
