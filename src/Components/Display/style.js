import { makeStyles } from "@material-ui/core";
export default makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },
  searchField: {
    width: "20rem",
  },
  mainContainer: {
    marginTop: "2rem",
  },
  shopDetailsContainer: {
    margin: "0rem",
    textAlign: "center",
  },
  deleteIcon: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  boxContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    marginTop: "2rem",
  },
}));
