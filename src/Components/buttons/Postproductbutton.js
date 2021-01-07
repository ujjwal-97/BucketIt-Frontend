import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import theme from '../../theme';

const useStyles = makeStyles((theme) => ({
  Button: {
    width: '200px',
  },
}));

function Postproductbutton({ disablePost = false }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Link
        to="/postproduct"
        style={{ textDecoration: 'none' }}
        className={classes.Link}
      >
        <Button
          variant="contained"
          color="secondary"
          className={classes.Button}
          disabled={disablePost}
        >
          POST PRODUCT
        </Button>
      </Link>
    </ThemeProvider>
  );
}
export default Postproductbutton;
