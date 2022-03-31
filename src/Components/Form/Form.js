import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Paper,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { shopAreas, shopCategory } from "../../Data";
import { useDispatch } from "react-redux";
import useStyles from "./style";

function Form() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [postData, setPostData] = useState({
    shopName: "",
    shopArea: "",
    shopCategory: "",
    id: "",
    openingDate: "",
    closingDate: "",
  });

  useEffect(() => {
    setPostData((postData) => {
      return { ...postData, id: Math.random() };
    });
  }, [postData.shopName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requireRegForm = /^[A-Za-z ]+$/;
    if (
      postData.shopName.match(requireRegForm) &&
      Date.parse(postData.openingDate) < Date.parse(postData.closingDate)
    ) {
      dispatch({ type: "ADD_SHOP", payload: postData });
      setPostData({
        shopName: "",
        shopArea: "",
        shopCategory: "",
        id: "",
        openingDate: "",
        closingDate: "",
      });
    } else {
      alert("Please enter valid details");
    }
  };
  return (
    <form
      autoComplete="off"
      className={`${classes.form}`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <Typography variant="h6">Add Your Shop</Typography>
      <TextField
        name="shopName"
        variant="outlined"
        label="Shop Name"
        fullWidth
        value={postData.shopName}
        onChange={(e) => setPostData({ ...postData, shopName: e.target.value })}
        required={true}
      />
      <TextField
        id="shop-area"
        select
        label="Shop Area"
        value={postData.shopArea}
        onChange={(e) => setPostData({ ...postData, shopArea: e.target.value })}
        fullWidth
        required={true}
      >
        {shopAreas.map((area) => (
          <MenuItem key={area} value={area}>
            {area}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="shop-category"
        select
        label="Shop Category"
        value={postData.shopCategory}
        onChange={(e) =>
          setPostData({ ...postData, shopCategory: e.target.value })
        }
        fullWidth
        required={true}
      >
        {shopCategory.map((area) => (
          <MenuItem key={area} value={area}>
            {area}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="openingDate"
        label="Opening"
        type="date"
        fullWidth
        required={true}
        value={postData.openingDate}
        onChange={(e) =>
          setPostData({ ...postData, openingDate: e.target.value })
        }
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="closingDate"
        label="Closing"
        type="date"
        fullWidth
        required={true}
        value={postData.closingDate}
        onChange={(e) =>
          setPostData({ ...postData, closingDate: e.target.value })
        }
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default Form;
