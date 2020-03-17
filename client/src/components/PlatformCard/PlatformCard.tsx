import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from '@material-ui/core';
import AttachMoney from '@material-ui/icons/AttachMoney';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { PlatformDetailsDrawer } from '../PlatformDetailsDrawer';
import { currency } from '../../utils/currency';

interface Props {
  name: string;
  platform: Platform;
}

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    maxWidth: 500,
  },
  title: {
    fontSize: 14,
    marginBottom: theme.spacing(2),
  },
}));

export function PlatformCard({ name, platform }: Props) {
  const [drawer, toggleDrawer] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {name}
          </Typography>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                value={platform.status}
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                label="Status"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                value={currency(platform.total_budget)}
                type="number"
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoney />
                    </InputAdornment>
                  ),
                }}
                label="Total Budget"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                value={moment(platform.start_date).format('YYYY-MM-DD')}
                type="date"
                InputProps={{
                  readOnly: true,
                }}
                label="Start Date"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                value={moment(platform.end_date).format('YYYY-MM-DD')}
                type="date"
                InputProps={{
                  readOnly: true,
                }}
                label="End Date"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={() => toggleDrawer(true)}>
            See Details
          </Button>
        </CardActions>
      </Card>
      <PlatformDetailsDrawer
        platform={platform}
        open={drawer}
        onClose={() => toggleDrawer(false)}
      />
    </>
  );
}
