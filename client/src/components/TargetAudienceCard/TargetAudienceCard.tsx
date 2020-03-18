import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Slider,
  InputLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SelectMultipleInput } from '../SelectMultipleInput';

interface Props {
  targetAudience: TargetAudience;
}

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    maxWidth: 300,
  },
  title: {
    fontSize: 14,
    marginBottom: theme.spacing(2),
  },
}));

export function TargetAudienceCard({ targetAudience }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Target Audience
        </Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <InputLabel variant="outlined" shrink>
              Age Range
            </InputLabel>
            <Slider
              value={targetAudience.age_range}
              valueLabelDisplay="auto"
              color="secondary"
            />
          </Grid>
          <Grid item>
            <SelectMultipleInput
              label="Languages"
              values={targetAudience.languages}
            />
          </Grid>
          <Grid item>
            <SelectMultipleInput
              label="Gender"
              values={targetAudience.genders}
            />
          </Grid>
          <Grid item>
            <SelectMultipleInput
              label="Locations"
              values={targetAudience.locations}
            />
          </Grid>
          <Grid item>
            <SelectMultipleInput
              label="Interests"
              values={targetAudience.interests}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
