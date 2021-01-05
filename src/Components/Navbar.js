import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Button: {
    width: '200px',
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

function Navbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <ThemeProvider theme={theme}>
            <Link to="/">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="primary"
                aria-label="menu"
              >
                <HomeIcon />
              </IconButton>
            </Link>
          </ThemeProvider>
          <Box
            display="flex"
            flexGrow={1}
            justifyContent="flex-end"
            m={1}
            p={1}
          >
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                className={classes.Button}
              >
                POST PRODUCT
              </Button>
            </ThemeProvider>

            <Button color="inherit" className={classes.Button}>
              REGISTER
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
