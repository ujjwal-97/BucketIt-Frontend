import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import RegisterButton from './buttons/Registerbutton';
import Signinbutton from './buttons/Signinbutton';
import Postproductbutton from './buttons/Postproductbutton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: 'nowrap',
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

function Navbar({ signin = false, register = false, disablePost = false }) {
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
            <Postproductbutton disablePost={disablePost} />
            {register && <RegisterButton />}
            {signin && <Signinbutton />}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
