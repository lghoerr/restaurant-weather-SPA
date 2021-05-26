import React, { useState, useEffect, useContext } from "react";
import API from "./API";
import Restaurants from "./Restaurants";
import Map from "./Map";
import { Button, makeStyles } from "@material-ui/core";
import Input from "./Input";
import { CoordsContext } from "../../contexts/coordsContext";

const useStyles = makeStyles((theme) => ({
  button: { color: "white", backgroundColor: "indigo" },
  changeIt: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 30px",
    alignItems: "flex-end",
  },
}));

export default function Coordinates() {
  const classes = useStyles();
  const { coords, setCoords } = useContext(CoordsContext);
  const [results, setResults] = useState(null);
  const [other, setOther] = useState(false);

  useEffect(() => {
    if (coords[0] && coords[1]) {
      API.searchRestaurants(coords[0], coords[1]).then((data) => {
        setResults(data);
      });
    } else {
      setOther(true);
    }
  }, [coords]);

  if (results) {
    return (
      <div>
        <Map data={results} lng={coords[1]} lat={coords[0]} />
        <div className={classes.middle}>
          {other ? (
            <Input setCoords={setCoords} setOther={setOther} />
          ) : (
            <>
              <Button onClick={() => setOther(true)} className={classes.button}>
                Search
              </Button>
              <Restaurants data={results} />
            </>
          )}
        </div>
      </div>
    );
  } else {
    return <div className={classes.loading}></div>;
  }
}
