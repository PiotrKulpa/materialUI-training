import { createTheme } from '@mui/material/styles';
import { purple, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

export default theme;