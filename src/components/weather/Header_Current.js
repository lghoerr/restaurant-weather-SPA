import React, { useContext } from "react";
import weather_icon from "./weather_icon.png";
import { CoordsContext } from "../../contexts/coordsContext";

const Header_Current = (props) => {
  const { coords, setCoords } = useContext(CoordsContext);
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <br></br>
      <h1>Weather App</h1>
      <img src={weather_icon} alt="Weather" width="10%" />
      <h3>
        Location: {coords[0]} , {coords[1]}
      </h3>
      <h2>Temperature: {props.temp} &deg;F</h2>
      <h2>Forecast: {props.weather}</h2>
    </div>
  );
};

export default Header_Current;
