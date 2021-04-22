import react, { useState } from "react";
import axios from "axios";
export const DodanieStudenta = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [index, setIndex] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    if (name && surname && index) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/Student`,
          {
            name,
            surname,
            index,
          }
        );
      } catch (error) {
        alert("Błąd!");
        console.log(error);
      }
    } else {
      alert("Podaj wszystkie dane!");
    }
    //alert(`${name} ${surname} ${index}`);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Imie</label>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <br />
      <label>Nazwisko</label>
      <br />
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      ></input>
      <br />
      <br />
      <label>Index</label>
      <br />
      <input
        type="text"
        value={index}
        onChange={(e) => setIndex(e.target.value)}
      ></input>
      <br />
      <br />
      <input type="submit" value="Wyślij"></input>
    </form>
  );
};
