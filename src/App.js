import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  customH1Style: {
    fontStyle: "oblique",
    color: "red",
  },
  customButtonStyle: {
    fontStyle: "green",
    border: 0,
  },
  customDividerStyle: {
    padding: "150",
  },
  gutterBottom: {
    marginBottom: "0.6em",
    // using media queries to set custom styles
    [theme.breakpoints.up('xl')]: {
      backgroundColor: 'red',
    },
  },
}));

function App() {
  // Hook for override styles
  const classes = useStyles();

  return (
    <>
      {/* UX layout */}
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
      <Box sx={{ margin: 10 }}>
        <Divider />
      </Box>
      <Button
        className={classes.customButtonStyle}
        size="large"
        color="secondary"
        variant="outlined"
        disableRipple
      >
        Hello World
      </Button>
      <Typography
        gutterBottom
        variant="h1"
        // should override default props
        classes={{
          gutterBottom: classes.gutterBottom,
        }}
      >
        Hello
      </Typography>
    </>
  );
}

export default App;
