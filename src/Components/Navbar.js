import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import RegisterButton from './buttons/Registerbutton';
import Signinbutton from './buttons/Signinbutton';
import Adminbutton from './buttons/Adminbutton';
import Logoutbutton from './buttons/Logoutbutton';
import Postproductbutton from './buttons/Postproductbutton';
import theme from '../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: 'nowrap',
  },
  Button: {
    width: '200px',
  },
}));

function Navbar({
  signin = false,
  register = false,
  disablePost = false,
  post = true,
  admin = false,
  logout = false,
}) {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <IconButton
                edge="start"
                className={classes.MuiButton}
                color="primary"
                aria-label="menu"
              >
                <HomeIcon />
              </IconButton>
            </Link>

            <Box
              display="flex"
              flexGrow={1}
              justifyContent="flex-end"
              m={1}
              p={1}
            >
              {post && <Postproductbutton disablePost={disablePost} />}
              {admin && <Adminbutton />}
              {register && <RegisterButton />}
              {signin && <Signinbutton />}
              {logout && <Logoutbutton />}
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}

export default Navbar;
