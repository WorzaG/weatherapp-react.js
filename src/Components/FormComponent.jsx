import React, { useState } from "react";
import { useTemp } from "../Context/TempContext";

export default function FormComponent() {
  const { city, setCity } = useTemp();
  const [input, setInput] = useState("");
  const hanldeSubmit = (e) => {
    e.preventDefault();
    setCity(input);
  };
  return (
    <div className="city_form">
      <form>
        <input
          name="text"
          placeholder="bir şehir giriniz"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={hanldeSubmit}>Ara</button>
      </form>
    </div>
  );
}
