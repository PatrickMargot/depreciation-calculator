import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';

import inRange from 'lodash/inRange';

import NumberField from './NumberField';

import getOutputRows from '../utils/getOutputRows';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridRowGap: theme.spacing(4),
    padding: `${theme.spacing(4)}px max(calc(50% - 190px), ${theme.spacing(4)}px)`,
    backgroundColor: theme.palette.background.default,
    '& .MuiTextField-root': {
      marginTop: theme.spacing(1),
    },
  },
  firstTwoInputs: {
    gridColumn: '1 / span 2',
    '& .MuiTextField-root:first-child': {
      marginTop: 0,
    },
  },
  inputMode: {
    gridColumn: '1 / span 2',
  },
  formControlLabelPercent: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    marginRight: 0,
  },
  formControlLabelYears: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    marginRight: 0,
  },
}));

function Input(props) {

  const { setOutputRows } = props;

  const classes = useStyles();

  const [inputMode, setInputMode] = useState('residual');

  const [depreciationMode, setDepreciationMode] = useState('linear');

  const [depreciationPosting, setDepreciationPosting] = useState('direct');

  const [acquisitionValue, setAcquisitionValue] = useState(null);

  const [years, setYears] = useState(null);

  const [residualValue, setResidualValue] = useState(null);

  const [percent, setPercent] = useState(null);

  useEffect(() => {
    
    if (inputMode === 'residual' && residualValue === null) {
      setOutputRows([])
      return;
    };

    const calculatedPercent =
      inputMode === 'percent'
        ? percent
        : depreciationMode === 'linear'
          ? (acquisitionValue - residualValue) / years / acquisitionValue
          : 1 - Math.pow(residualValue / acquisitionValue, 1 / years);

    setOutputRows(
      getOutputRows({
        depreciationMode,
        depreciationPosting,
        acquisitionValue,
        years,
        percent: calculatedPercent,
      })
    );

  });


  return (
    <FormControl className={classes.root}>

      <div className={classes.firstTwoInputs}>
        <NumberField
          className={classes.acquisitionValue}
          errorMessage={"Bitte eine Zahl grösser als der Restwert eingeben"}
          onChange={value => setAcquisitionValue(value)}
          extraCheck={value => residualValue === null || value > residualValue}
          label="Anschaffungswert"
          variant="filled"
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="end">CHF</InputAdornment>,
          }}
        />
        <NumberField
          className={classes.inputYears}
          errorMessage={"Bitte eine ganze Zahl eingeben im Bereich 1-99"}
          onChange={value => setYears(value)}
          extraCheck={value => inRange(value, 1, 100) && Number.isInteger(value)}
          label="Nutzungsdauer"
          variant="filled"
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="end">Jahre</InputAdornment>,
          }}
        />
      </div>

      <RadioGroup className={classes.inputMode} value={inputMode} onChange={event => setInputMode(event.target.value)}>
        <FormLabel focused={false}>Angabe in</FormLabel>
        <FormControlLabel
          className={classes.formControlLabelYears}
          value="residual"
          control={<Radio color="primary" />}
          label={
            <NumberField
              errorMessage={"Bitte eine Zahl kleiner als der Anschaffungswert eingeben"}
              onChange={value => setResidualValue(value)}
              extraCheck={value => acquisitionValue === null || value < acquisitionValue}
              label="Restwert"
              variant="filled"
              fullWidth
              disabled={inputMode === 'percent'}
              InputProps={{
                endAdornment: <InputAdornment position="end">CHF</InputAdornment>,
              }}
            />
          }
        />
        <FormControlLabel
          className={classes.formControlLabelPercent}
          value="percent"
          control={<Radio color="primary" />}
          label={
            <NumberField
              errorMessage={"Bitte eine Zahl eingeben"}
              onChange={value => setPercent(value / 100)}
              label="Abschreibungen in Prozent"
              variant="filled"
              fullWidth
              disabled={inputMode === 'residual'}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          }
        />
      </RadioGroup>

      <RadioGroup value={depreciationMode} onChange={event => setDepreciationMode(event.target.value)}>
        <FormLabel focused={false}>Abschreibungsart</FormLabel>
        <FormControlLabel
          value="linear"
          control={<Radio color="primary" />}
          label={<Typography color="textPrimary">linear</Typography>}
        />
        <FormControlLabel
          value="degressive"
          control={<Radio color="primary" />}
          label={<Typography color="textPrimary">degressiv</Typography>}
        />
      </RadioGroup>

      <RadioGroup value={depreciationPosting} onChange={event => setDepreciationPosting(event.target.value)}>
        <FormLabel focused={false}>Buchungsart</FormLabel>
        <FormControlLabel
          value="direct"
          control={<Radio color="primary" />}
          label={<Typography color="textPrimary">direkt</Typography>}
        />
        <FormControlLabel
          value="indirect"
          control={<Radio color="primary" />}
          label={<Typography color="textPrimary">indirekt</Typography>}
        />
      </RadioGroup>

    </FormControl>
  );
}

export default React.memo(Input);
