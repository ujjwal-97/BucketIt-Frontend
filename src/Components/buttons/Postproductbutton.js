import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from '../../theme';

const useStyles = makeStyles((theme) => ({
  Button: {
    width: '200px',
  },
}));

function Postproductbutton({ disablePost = true }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="secondary"
        type="button"
        onClick={(e) => {
          window.location.href = 'postproduct';
        }}
        className={classes.Button}
        disabled={disablePost}
      >
        POST PRODUCT
      </Button>
    </ThemeProvider>
  );
}
export default Postproductbutton;
