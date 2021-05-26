import React from "react";

const Daily = (props) => {
  return (
    <div style={{ textAlign: "center", color: "#ff7961", fontSize: 25 }}>
      <div className="Daily">
        <u1>
          {props.temps.map((value, index) => {
            return (
              <div>
                Day: {index + 1} -- {props.mains[index]}
                -- Temperature: {value} &deg;F
              </div>
            );
          })}
        </u1>
      </div>
    </div>
  );
};

export default Daily;
