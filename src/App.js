import React from 'react';
import logo from './logo.svg';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="idCard">
        <IdCard 
        lastName="Doe"
        firstName="Jonh"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
      <IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
    </div>
  );
}

<div>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings> </div>;

<div>
<Random min={1} max={6}/>
<Random min={1} max={100}/> </div>;

<div>;
BoxColor r={255} g={0} b={0}
BoxColor r={128} g={255} b={0}
</div>


export default App;


