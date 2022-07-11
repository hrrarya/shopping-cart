import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appbar: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  logo: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
});

export { useStyles };
