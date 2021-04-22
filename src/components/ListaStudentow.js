import axios from "axios";
import react, { useEffect, useState } from "react";
import KartaStudenta from "./KartaStudenta";

function ListaStudentow() {
  //{JSON.stringify(props,null,2)}
  const [data, setData] = useState();
  useEffect(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/Student`
      );
      setData(response.data);
    } catch (error) {
      alert("Nie udało się pobrać danych!");
      console.log(error);
    }
  }, []);
  return (
    <p className="red">
      {data ? (
        data.map((student) => (
          <KartaStudenta
            index={student.index}
            name={student.name}
            surname={student.surname}
          />
        ))
      ) : (
        <div>Nie udało się pobrać danych!</div>
      )}
    </p>
  );
}
export default ListaStudentow;
