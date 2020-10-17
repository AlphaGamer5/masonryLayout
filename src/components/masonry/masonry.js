import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import About from '../about/about'
import SignUp from '../register/register';
import Rules from '../rules/rules';
import Judgement from '../judgement/judgement';
import SimpleZoom from '../animations/animation'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={5}>
          <Paper className={classes.paper}><About/></Paper>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Paper className={classes.paper}><Rules/></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={5}>
          <Paper className={classes.paper}><Judgement/></Paper>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Paper className={classes.paper}><SimpleZoom/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
