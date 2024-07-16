import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    setFahrenheit(convertToFarhenheit(value));
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    setCelsius(convertToCelsius(value));
  };

  const convertToFarhenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const convertToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  return (
    <div>
      <TextField
        label="Градусы Цельсия"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TextField
        label="Градусы Фаренгейта"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
};

export default TemperatureConverter;
