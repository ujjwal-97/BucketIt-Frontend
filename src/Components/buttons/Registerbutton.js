import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Button: {
    width: '200px',
  },
  Link: {
    color: '#fafafa',
  },
}));

function RegisterButton() {
  const classes = useStyles();
  return (
    <Link
      to="/register"
      style={{ textDecoration: 'none' }}
      className={classes.Link}
    >
      <Button color="inherit" className={classes.Button}>
        REGISTER
      </Button>
    </Link>
  );
}
export default RegisterButton;
