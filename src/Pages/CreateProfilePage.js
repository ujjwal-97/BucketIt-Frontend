import React from 'react';
import Navbar from '../Components/Navbar';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import CreateProfile from '../Components/CreateProfile';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    width: '90%',
    marginLeft: '30%',
  },
});

const theme = createMuiTheme({
  typography: {
    fontSize: 14,
  },
});

function CreateProfilePage() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Typography
          variant="h4"
          align="center"
          style={{ marginTop: 40, marginBottom: 20 }}
        >
          <strong>
            Welcome! Let's build your profile! Bucketed community wants to know
            you better
          </strong>
        </Typography>
        <div className={classes.root}>
          <CreateProfile />
        </div>
      </ThemeProvider>
    </>
  );
}
export default CreateProfilePage;
