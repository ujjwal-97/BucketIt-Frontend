import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  Button: {
    width: '200px',
  },
  Link: {
    color: '#fafafa',
  },
}));

function Signinbutton() {
  const classes = useStyles();
  return (
    <Link to="/" style={{ textDecoration: 'none' }} className={classes.Link}>
      <Button color="inherit" className={classes.Button}>
        SIGN IN
      </Button>
    </Link>
  );
}
export default Signinbutton;
