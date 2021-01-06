import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#eebf00',
      contrastText: '#fff',
    },
  },
});

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
          color="primary"
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
