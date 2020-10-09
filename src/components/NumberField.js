import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function NumberField(props) {

  const {
    errorMessage,
    onChange,
    label,
    extraCheck = () => true,
    ...other
  } = props;

  const [text, setText] = useState('');

  const [isError, setIsError] = useState(false);

  const handleChange = ({ target: { value } }) => {

    const isNumber = /^[+-]?(\d*\.)?\d*$/.test(value);

    const number = parseFloat(value);

    if (isNumber && (value === '' || extraCheck(number))) {

      setIsError(false);

      onChange(isNaN(number) ? null : number);

    } else {

      setIsError(true);

    }

    setText(value);

  };

  return (
    <TextField
      {...other}
      onChange={handleChange}
      value={text}
      error={isError}
      label={isError ? errorMessage : label}
    />

  )
}

export default NumberField; 