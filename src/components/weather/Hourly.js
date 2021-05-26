import React from "react";

const Hourly = (props) => {
  return (
    <div style={{ textAlign: "center", color: "#ff7961", fontSize: 20 }}>
      <div className="Hourly">
        <u1>
          {props.temps.map((value, index) => {
            return (
              <div>
                Hour {index + 1}: -- {props.mains[index]}
                -- Temperature: {value} &deg;F
              </div>
            );
          })}
        </u1>
      </div>
    </div>
  );
};

export default Hourly;
