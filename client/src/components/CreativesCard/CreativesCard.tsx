import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  InputLabel,
} from '@material-ui/core';
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';
import { getImage } from '../../utils/getImage';

interface Props {
  creatives: Creatives;
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

export function CreativesCard({ creatives }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Creatives
        </Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              value={creatives.header}
              type="text"
              InputProps={{
                readOnly: true,
              }}
              label="Header"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={creatives.description}
              type="text"
              InputProps={{
                readOnly: true,
              }}
              label="Description"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              value={creatives.url}
              type="text"
              InputProps={{
                readOnly: true,
              }}
              label="URL"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item>
            <InputLabel variant="outlined" shrink>
              Image
            </InputLabel>
            <Image
              src={getImage(creatives.image)}
              style={{ height: 200, paddingTop: 0 }}
              imageStyle={{
                maxWidth: '100%',
                width: 'auto',
                height: '100%',
                maxHeight: 250,
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
