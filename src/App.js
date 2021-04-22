import logo from "./logo.svg";
import "./App.css";
import ListaStudentow from "./components/ListaStudentow";
import { DodanieStudenta } from "./components/DodanieStudenta";

function App() {
  return (
    <div>
      <ListaStudentow />
      <DodanieStudenta />
    </div>
  );
}

export default App;
