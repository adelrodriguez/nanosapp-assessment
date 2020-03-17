import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import AttachMoney from '@material-ui/icons/AttachMoney';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  insights: Insights;
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

export function InsightsCard({ insights }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Insights
        </Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              value={insights.impressions}
              type="number"
              InputProps={{
                readOnly: true,
              }}
              label="Impressions"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={insights.clicks}
              type="number"
              InputProps={{
                readOnly: true,
              }}
              label="Clicks"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={insights.website_visits}
              type="number"
              InputProps={{
                readOnly: true,
              }}
              label="Website Visits"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={insights.nanos_score}
              type="number"
              InputProps={{
                readOnly: true,
              }}
              label="Nanos Score"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={insights.cost_per_click}
              type="number"
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoney />
                  </InputAdornment>
                ),
              }}
              label="Cost Per Click"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={insights.click_through_rate}
              type="number"
              InputProps={{
                readOnly: true,
              }}
              label="Click Through Rate"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={insights.advanced_kpi_1}
              type="number"
              InputProps={{
                readOnly: true,
              }}
              label="Advanced KPI 1"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={insights.advanced_kpi_2}
              type="number"
              InputProps={{
                readOnly: true,
              }}
              label="Advanced KPI 2"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
