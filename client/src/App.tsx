import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { theme } from './config';
import CampaignsTable from './components/CampaignsTable';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CampaignsTable />
      </div>
    </ThemeProvider>
  );
}

export default App;
