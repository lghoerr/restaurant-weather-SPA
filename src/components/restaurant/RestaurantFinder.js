import React from "react";
import { makeStyles } from "@material-ui/core";
import Coordinates from "./Coordinates";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "200vh",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
  },
}));

export default function RestaurantFinder() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Coordinates />
      </div>
    </div>
  );
}
