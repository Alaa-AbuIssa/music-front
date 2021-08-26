import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../../src/assists/logo colored-01.png';
import Profile from '../../src/assists/profile icon-01.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <img src={Logo} className="logo" alt="logo"/>

          </Typography>
          <Button>PROFILE</Button>
          <img src={Profile} className="profile" alt="profile"/>

        </Toolbar>
      </AppBar>
    </div>
  );
}
