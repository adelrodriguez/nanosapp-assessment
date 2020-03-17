import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  InputAdornment,
  Grid,
  Divider,
  Typography,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import AttachMoney from '@material-ui/icons/AttachMoney';
import { PlatformCard } from '../PlatformCard';

interface Props {
  campaign: Campaign | undefined;
  loading: boolean;
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    '& .MuiTextField-root, .MuiSkeleton-root': {
      margin: theme.spacing(1),
      width: '20%',
      minWidth: 200,
    },
  },
  loading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 14,
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export function CampaignDetails({ campaign, loading }: Props) {
  const classes = useStyles();

  function getName(value: string) {
    switch (value) {
      case 'facebook':
        return 'Facebook';
      case 'instagram':
        return 'Instagram';
      case 'google':
        return 'Google Adwords';
      default:
        return '';
    }
  }

  if (loading || !campaign) {
    return (
      <div className={classes.root}>
        <Skeleton animation="wave" variant="rect" height={40} width={200} />
        <Skeleton animation="wave" variant="rect" height={40} width={200} />
        <Skeleton animation="wave" variant="rect" height={40} width={200} />
        <Skeleton animation="wave" variant="rect" height={40} width={200} />
      </div>
    );
  }

  const keys = Object.keys(campaign.platforms) as PlatformKey[];

  return (
    <div className={classes.root}>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        General Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <TextField
            value={campaign.name}
            InputProps={{
              readOnly: true,
            }}
            label="Name"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item>
          <TextField
            value={campaign.goal}
            type="text"
            InputProps={{
              readOnly: true,
            }}
            label="Goal"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item>
          <TextField
            value={campaign.status}
            type="text"
            InputProps={{
              readOnly: true,
            }}
            label="Status"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item>
          <TextField
            value={campaign.total_budget}
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
          />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <div>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Platforms Details
        </Typography>
        <Grid container spacing={2}>
          {keys.map(
            key =>
              campaign.platforms[key] && (
                <Grid item key={key}>
                  <PlatformCard
                    name={getName(key)}
                    platform={campaign.platforms[key]}
                  />
                </Grid>
              )
          )}
        </Grid>
      </div>
    </div>
  );
}
