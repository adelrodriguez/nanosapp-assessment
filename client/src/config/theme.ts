import { createMuiTheme } from '@material-ui/core/styles';

const BLUE = '#0945a8';
const GREEN = '#5eb782';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: GREEN,
    },
    secondary: {
      main: BLUE,
    },
  },
});
