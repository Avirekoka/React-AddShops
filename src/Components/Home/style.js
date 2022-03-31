import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  homeAppBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
  },
  homeContainer: {
    display: "flex",
    flexDirection: "row",
  },
  homeHeadings: {
    textDecoration: "none",
    color: "rgba(0,183,255, 1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    marginTop: "2rem",
  },
}));
