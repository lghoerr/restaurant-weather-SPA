import React from "react";
import { makeStyles } from "@material-ui/core";
import lucia from "./lucia.JPG";
import petunia1 from "./petunia1.jpeg";
import petunia2 from "./petunia2.JPG";
import petunia3 from "./petunia3.JPG";
import petunia4 from "./petunia4.JPG";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import PetsIcon from "@material-ui/icons/Pets";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    height: 800,
    textAlign: "center",
    alignContent: "center",
    padding: 20,
    backgroundColor: theme.palette.primary.main,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <br></br>
      <h1>Restaurant Finder/Weather Combo App</h1>
      <p>
        Welcome to the home page. Click on the navigation links above to explore
        the Restaurant Finder and Weather App.
      </p>
      <p>
        <div style={{ paddingTop: 290 }}>
          <img src={petunia1} alt="Lucia and Petunia" width="15%" />
          <img src={petunia2} alt="Lucia and Petunia" width="15%" />
          <img src={lucia} alt="Lucia and Petunia" width="20%" />
          <img src={petunia3} alt="Lucia and Petunia" width="15%" />
          <img src={petunia4} alt="Lucia and Petunia" width="15%" />
        </div>
      </p>
      <div
        style={{
          fontSize: "14px",
          fontStyle: "italic",
          color: "pink",
          padding: 10,
        }}
      >
        <FilterVintageIcon style={{ fontSize: 14 }} />
        <PetsIcon style={{ fontSize: 14 }} />
        Created by Lucia Hoerr
        <PetsIcon style={{ fontSize: 14 }} />
        <FilterVintageIcon style={{ fontSize: 14 }} />
      </div>
    </div>
  );
}

export default Home;
