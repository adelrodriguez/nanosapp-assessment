import React from 'react';
import { Drawer, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TargetAudienceCard } from '../TargetAudienceCard';
import { InsightsCard } from '../InsightsCard';
import { CreativesCard } from '../CreativesCard';

interface Props {
  open: boolean;
  platform: Platform;
  onClose: () => void;
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    maxHeight: '70vh',
  },
}));

export function PlatformDetailsDrawer({ open, platform, onClose }: Props) {
  const classes = useStyles();

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.paper,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <CreativesCard creatives={platform.creatives} />
        </Grid>
        <Grid item>
          <TargetAudienceCard targetAudience={platform.target_audience} />
        </Grid>
        <Grid item>
          <InsightsCard insights={platform.insights} />
        </Grid>
      </Grid>
    </Drawer>
  );
}
