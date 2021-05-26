import React, { useState } from "react";
import Hourly from "./Hourly";
import Daily from "./Daily";
import { Button } from "@material-ui/core";

const Switch = (props) => {
  const [name, setName] = useState("Hourly");
  const [isHourly, setIsHourly] = useState(false);

  const onClick = (e) => {
    if (name === "Daily") {
      setName("Hourly");
      setIsHourly(true);
    } else {
      setName("Daily");
      setIsHourly(false);
    }
  };

  return (
    <div className="Switch">
      <div>
        <Button variant="contained" opacity="0.5" onClick={onClick}>
          Switch Hourly/Daily
        </Button>
      </div>
      <br></br>
      <div>
        {isHourly && <Hourly temps={props.hourTemps} mains={props.hourMains} />}
      </div>
      <div>
        {!isHourly && <Daily temps={props.dayTemps} mains={props.dayMains} />}
      </div>
    </div>
  );
};

export default Switch;
