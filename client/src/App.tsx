import React, { useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import 'typeface-roboto';
import { theme } from './config';
import AlertContext from './contexts/Alert';
import CampaignsTable from './components/CampaignsTable';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function App() {
  const [error, setError] = useState('');
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AlertContext.Provider value={{ error, setError }}>
        {error && <Alert severity="error">{error}</Alert>}
        <div className={classes.root}>
          <CampaignsTable />
        </div>
      </AlertContext.Provider>
    </ThemeProvider>
  );
}

export default App;
