import axios from "axios";
import react, { useEffect, useState } from "react";

function KartaStudenta({ name, surname, index }) {
  //{JSON.stringify(props,null,2)}
  return (
    <p className="red">
      imie: {name} <br /> nazwisko: {surname} <br /> index: {index}
    </p>
  );
}
export default KartaStudenta;
