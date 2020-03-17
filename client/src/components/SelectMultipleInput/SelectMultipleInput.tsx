import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  Chip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  label: string;
  values: string[];
}

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    width: '100%',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

export function SelectMultipleInput({ label, values }: Props) {
  const classes = useStyles();

  return (
    <FormControl
      className={classes.formControl}
      variant="outlined"
      size="small"
    >
      <InputLabel variant="outlined">{label}</InputLabel>
      <Select
        multiple
        value={values}
        input={<OutlinedInput label={label} readOnly />}
        renderValue={() => (
          <div className={classes.chips}>
            {values.map(value => (
              <Chip
                color="secondary"
                key={value}
                label={value}
                className={classes.chip}
                clickable
                size="small"
              />
            ))}
          </div>
        )}
        IconComponent={() => null}
      />
    </FormControl>
  );
}
