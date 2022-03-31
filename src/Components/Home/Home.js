import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./style";
import { Link } from "react-router-dom";

const Home = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.homeAppBar}>
      <div className={classes.homeContainer}>
        <Typography
          variant="h5"
          component={Link}
          to={"/"}
          className={classes.homeHeadings}
        >
          Nash-Shop
        </Typography>
      </div>

      <Toolbar variant="dense">
        <Typography
          variant="h6"
          color="inherit"
          component={Link}
          to={"/display"}
          className={classes.homeHeadings}
        >
          Display-Shops
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Home;
