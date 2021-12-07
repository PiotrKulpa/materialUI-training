import "./App.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customH1Style: {
    fontStyle: "oblique",
    color: "red",
  },
  customButtonStyle: {
    fontStyle: "green",
    border: 0,
  },
});

function App() {
  // Hook for override styles
  const classes = useStyles();

  return (
    <>
      <Typography
        className={classes.customH1Style}
        variant="h1"
        component="div"
        gutterBottom
      >
        h1. Heading
      </Typography>
      <Button
        className={classes.customButtonStyle}
        size="large"
        color="secondary"
        variant="outlined"
      >
        Hello World
      </Button>
    </>
  );
}

export default App;
