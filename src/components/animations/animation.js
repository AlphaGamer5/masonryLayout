import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import SignUp from '../register/register'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function SimpleZoom() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Zoom>
          <SignUp/>
        </Zoom>
      </div>
    </div>
  );
}
