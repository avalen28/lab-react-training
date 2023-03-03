import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import CreditCard from './components/CreditCard';
import Likebutton from './components/Likebutton';

function App() {
  return (
    <div className="App">
      {/* iteration 1*/}
      {/* <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      /> */}

      {/* <IdCard
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
      /> */}

      {/* iteration 2*/}
      {/* <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings> */}

      {/* iteration 3*/}
      {/* <Random min={1} max={6} />
      <Random min={1} max={100} /> */}

      {/* iteration 4*/}
      {/* <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} /> */}

      {/* iteration 5*/}
      {/* <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      /> */}

      {/* iteration 6*/}
      {/* <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating> */}

      {/* iteration 7*/}
      {/* <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      /> */}

      {/* iteration 8*/}
      {/* <Likebutton /> */}
    </div>
  );
}

export default App;
