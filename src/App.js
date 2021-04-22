import logo from './logo.svg';
import './App.css';
import KartaPacjenta from './components/KartaPacjenta';
import KartaLekarza from './components/KartaLekarza';

const datefromdb = [
  {
    imie: "jan", numer: 5
  },
  {
    imie: "andrzej", numer: 4
  }
]
const datefromdb2 = [
  {
    imie: "kuba", nazwisko: "jakis"
  },
  {
    imie: "jarek", nazwisko: "takis"
  }
]
function App() {
  return (
    <div className="App">
      {
        datefromdb.map(osoba=>(
          <KartaPacjenta imie={osoba.imie} numer={osoba.numer}/>
        ))
      }
      {
         datefromdb2.map(lekarz=>(
          <KartaLekarza imie={lekarz.imie} nazwisko={lekarz.nazwisko}/>
         ))
      }
    </div>
  );
}

export default App;
