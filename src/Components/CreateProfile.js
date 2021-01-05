import React, { useState } from 'react';
import { Button, TextField, Grid, Paper } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './SignInCard.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffbf00',
      contrastText: '#fff',
    },
  },
});

function CreateProfile() {
  const [companyname, setCompany] = useState('');
  const [linkedIn, setlinkedIn] = useState('');
  const [profession, setProfession] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    let body = JSON.stringify({ companyname, linkedIn });
    console.log(body);
  };

  return (
    <div>
      <Grid container justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            className="login-form"
          >
            <Paper
              variant="elevation"
              elevation={5}
              className="login-background"
            >
              <Grid item>
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="Company Name"
                        fullWidth
                        name="companyname"
                        variant="outlined"
                        required
                        autoFocus
                        margin="dense"
                        value={companyname}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="LinkedIn Profile"
                        fullWidth
                        name="linkedIn"
                        variant="outlined"
                        required
                        margin="dense"
                        value={linkedIn}
                        onChange={(e) => setlinkedIn(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="Profession"
                        fullWidth
                        name="profession"
                        variant="outlined"
                        required
                        margin="dense"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="textholder"
                        placeholder="About Me"
                        fullWidth
                        name="about me"
                        variant="outlined"
                        required
                        margin="dense"
                        value={aboutMe}
                        onChange={(e) => setAboutMe(e.target.value)}
                      />
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      spacing={1}
                      justify="center"
                    >
                      <Grid item className="align-box">
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          Bucket It
                        </Button>
                      </Grid>
                      <Grid item className="align-box">
                        <ThemeProvider theme={theme}>
                          <Button
                            className="button-block"
                            variant="contained"
                            color="primary"
                          >
                            DOWNLOAD
                          </Button>
                        </ThemeProvider>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default CreateProfile;
