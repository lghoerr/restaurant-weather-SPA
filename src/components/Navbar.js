import React from "react";
import { Link } from "react-router-dom";
import RestaurantSharpIcon from "@material-ui/icons/RestaurantSharp";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import HomeIcon from "@material-ui/icons/Home";

function Navbar() {
  return (
    <div style={{ height: 70, backgroundColor: "#ff7961", fontSize: 18 }}>
      <Link to="/">
        Home <HomeIcon style={{ fontSize: 14 }} />
      </Link>
      <br></br>
      <Link to="/weather">
        Local Weather <WbSunnyIcon style={{ fontSize: 14 }} />
      </Link>
      <br></br>
      <Link to="/restaurant">
        Restaurant Finder <RestaurantSharpIcon style={{ fontSize: 14 }} />
      </Link>
    </div>
  );
}

export default Navbar;
