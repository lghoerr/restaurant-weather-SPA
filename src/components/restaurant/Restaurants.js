import React, { useContext } from "react";
import { Box, makeStyles, Grid, IconButton } from "@material-ui/core";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import { CoordsContext } from "../../contexts/coordsContext";

const useStyles = makeStyles((theme) => ({
  restaurant: {
    margin: 15,
    padding: 10,
    color: "white",
    maxWidth: 600,
  },
  listItem: {
    alignItems: "center",
    color: "white",
    width: 500,
    overflow: "scroll",
    display: "flex",
  },
  list: {
    height: "100",
    paddingBottom: 35,
    overflow: "scroll",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "500",
  },
}));

export default function Restaurants({ data }) {
  const { coords, setCoords } = useContext(CoordsContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <>
        <div className={classes.header}></div>
        <div className={classes.list}>
          {data.map((restaurant) => (
            <Box className={classes.listItem} key={restaurant.address}>
              <Grid style={{ width: 600 }}>
                <h4 align="left">
                  <strong>{restaurant.name}</strong>
                </h4>
                <p align="left">{restaurant.address}</p>
              </Grid>
              <Grid style={{ width: 150 }}>
                <p>
                  <strong>Price</strong>
                </p>
                {"$".repeat(restaurant.price)}
              </Grid>
              <Grid style={{ width: 200 }}>
                <p>
                  <strong>Rating</strong>
                </p>
                {"*".repeat(restaurant.rating)}
              </Grid>
              <IconButton
                style={{ width: 100 }}
                href={`https://www.google.com/maps/dir/${coords[0]},${
                  coords[1]
                }/${encodeURIComponent(restaurant.address)}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <DirectionsCarIcon style={{ color: "white" }} />
              </IconButton>
            </Box>
          ))}
        </div>
      </>
    </div>
  );
}
