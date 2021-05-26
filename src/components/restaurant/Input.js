import React, { useState, useContext } from "react";
// Axios from https://www.digitalocean.com/community/tutorials/react-axios-react
import axios from "axios";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { CoordsContext } from "../../contexts/coordsContext";

require("dotenv").config();

const API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;

const useStyles = makeStyles({
  header: { color: "white" },
  addressInput: { width: 150, margin: 50 },
  button: { color: "white", backgroundColor: "blue" },
});

export default function UserInput({ setOther }) {
  const { coords, setCoords } = useContext(CoordsContext);
  const classes = useStyles();
  const [formData, setFormData] = useState({
    streetNumber: "",
    streetName: "",
    city: "",
    state: "",
    streetType: "",
  });

  const handleChangeText = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const { streetNumber, streetName, city, state, streetType } = formData;

  const submitAddress = () => {
    const set = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    const address = `${streetNumber}+${streetName}+${streetType}+${city}+${state}`;
    const url = set + address + "&key=" + API_KEY;

    axios.get(url).then((response) => {
      const lat = response.data.results[0].geometry.location.lat;
      const lng = response.data.results[0].geometry.location.lng;

      setCoords([lat, lng]);
      setOther(false);
    });
  };

  return (
    <div className={classes.root}>
      <h4 className={classes.header}>Search Location</h4>
      <TextField
        id="steetNumber"
        label="Street Number"
        onChange={handleChangeText}
        className={classes.addressInput}
      />
      <TextField
        id="streetName"
        label="Street Name"
        onChange={handleChangeText}
        className={classes.addressInput}
      />
      <TextField
        id="streetType"
        label="Street Type"
        onChange={handleChangeText}
        className={classes.addressInput}
      />
      <br></br>
      <TextField
        id="city"
        label="City"
        onChange={handleChangeText}
        className={classes.addressInput}
      />
      <TextField
        id="state"
        label="State"
        onChange={handleChangeText}
        className={classes.addressInput}
      />
      <br />
      <Button className={classes.button} onClick={submitAddress}>
        Find
      </Button>
    </div>
  );
}
