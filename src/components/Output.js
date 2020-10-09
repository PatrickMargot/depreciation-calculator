import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import lightenColor from '../utils/lightenColor';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: lightenColor(theme.palette.background.default, -3),
    [theme.breakpoints.up('md')]: {
      overflowY: 'auto',
    },
    padding: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
}));

function Output(props) {

  const { outputRows } = props;

  const classes = useStyles();

  const precision = 2;

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Jahr</TableCell>
              <TableCell align="right">Abschreibungs&shy;betrag</TableCell>
              <TableCell align="right">Restwert Anlagekonto</TableCell>
              {outputRows[0] && outputRows[0].wbValue &&
                <TableCell align="right">Betrag WB-Konto</TableCell>
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {outputRows.map(row => (
              <TableRow key={row.year}>
                <TableCell component="th" scope="row">
                  {row.year}
                </TableCell>
                <TableCell align="right">{row.depreciationAmount.toFixed(precision)} CHF</TableCell>
                <TableCell align="right">{row.residualValue.toFixed(precision)} CHF</TableCell>
                {row.wbValue &&
                  <TableCell align="right">{row.wbValue.toFixed(precision)} CHF</TableCell>
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Output;
