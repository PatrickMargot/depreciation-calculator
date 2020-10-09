import React, { useState } from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

import Input from './Input';
import Output from './Output';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    type: 'dark',
  },

});

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    },
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto 1fr',
    [theme.breakpoints.down('sm')]: {
      minHeight: '100vh',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto auto 1fr',
    },
  },
  header: {
    position: 'static',
    gridColumn: '1 / span 2',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1',
    },
  },
  title: {
    margin: `${theme.spacing(2)}px auto`,
  },
}));

function App() {

  const classes = useStyles();

  const [outputRows, setOutputRows] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar className={classes.header}>
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              Abschreibungsrechner
            </Typography>
          </Toolbar>
        </AppBar>
        <Input setOutputRows={setOutputRows} />
        <Output outputRows={outputRows} />
      </div>
    </ThemeProvider>
  );
}

export default App;
