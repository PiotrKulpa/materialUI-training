import React from "react";
import CoffeCard from "./CoffeCard";
import Grid from "@mui/material/Grid";
import coffeList from "./consts";

const Tile = () => {
  return (
    <Grid container spacing={4}>
      {coffeList &&
        coffeList.map(({ avatarUrl, title, subtitle, description, imageUrl }) => (
          <Grid item xs={12} sm={4}>
            <CoffeCard {...{ avatarUrl, title, subtitle, description, imageUrl }} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Tile;
