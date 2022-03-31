import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
  Button,
  Box,
} from "@material-ui/core";

import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
function Display() {
  const state = useSelector((state) => state);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchByShop, setSearchByShop] = useState("");
  const [searchByDate, setSearchByDate] = useState("");
  const [shops, setShops] = useState(state);

  useEffect(() => {
    const filteredList = state.filter((shop) => {
      return (
        shop.shopArea.toLowerCase().includes(searchByShop.toLowerCase()) ||
        shop.shopCategory.toLowerCase().includes(searchByShop.toLowerCase()) ||
        (Date.parse(searchByDate) >= Date.parse(shop.openingDate) &&
          Date.parse(searchByDate) <= Date.parse(shop.closingDate))
      );
    });
    setShops(filteredList);
  }, [searchByShop, searchByDate, state]);

  return (
    <div className={classes.mainContainer}>
      <form className={classes.form} onSubmit={(e) => console.log(e)}>
        <TextField
          name="search"
          variant="outlined"
          label="Search by Area or Category"
          value={searchByShop}
          onChange={(e) => setSearchByShop(e.target.value)}
          className={classes.searchField}
          autoComplete="off"
        />

        <TextField
          id="searchByDate"
          label="search by date"
          type="date"
          value={searchByDate}
          onChange={(e) => setSearchByDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <Grid container spacing={2}>
        {shops.length ? (
          shops?.map((shopDetails, index) => {
            return (
              <Grid
                xs={12}
                sm={4}
                item
                key={index}
                className={classes.shopDetailsContainer}
              >
                <Card>
                  <div className={classes.deleteIcon}>
                    <IconButton
                      onClick={() =>
                        dispatch({
                          type: "DELETE_SHOP",
                          payload: shopDetails?.id,
                        })
                      }
                    >
                      <DeleteOutline />
                    </IconButton>
                  </div>
                  <CardContent>
                    <Typography variant="h5">
                      Shop Name - {shopDetails?.shopName}
                    </Typography>
                    <Typography variant="h6">
                      Shop Area - {shopDetails?.shopArea}
                    </Typography>

                    <Typography variant="h6">
                      Shop Category - {shopDetails?.shopCategory}
                    </Typography>

                    <Typography variant="h6">
                      Opening Date - {shopDetails?.openingDate}
                      <br></br>
                      Closing Date - {shopDetails?.closingDate}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        ) : (
          <Box className={classes.boxContainer}>
            <Typography variant="h4">Please Add Shop</Typography>
            <Button variant="contained" component={Link} to="/">
              Add Shop
            </Button>
          </Box>
        )}
      </Grid>
    </div>
  );
}

export default Display;
