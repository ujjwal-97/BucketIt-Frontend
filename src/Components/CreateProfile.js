import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, InputLabel } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//import { Link } from 'react-router-dom';
import './SignInCard.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#eebf00',
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
    let body = JSON.stringify({ companyname, linkedIn, profession, aboutMe });
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
                      <InputLabel htmlFor="companyname">
                        Company Name
                      </InputLabel>
                      <TextField
                        type="text"
                        fullWidth
                        id="companyname"
                        variant="outlined"
                        autoFocus
                        margin="dense"
                        value={companyname}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <InputLabel htmlFor="linkedIn">
                        LinkedIn Profile
                      </InputLabel>
                      <TextField
                        type="text"
                        fullWidth
                        id="linkedIn"
                        variant="outlined"
                        margin="dense"
                        value={linkedIn}
                        onChange={(e) => setlinkedIn(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <InputLabel htmlFor="profession">Profession</InputLabel>
                      <TextField
                        type="text"
                        fullWidth
                        id="profession"
                        variant="outlined"
                        margin="dense"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <InputLabel htmlFor="aboutme">
                        About Me (Max. in 1000 words)
                      </InputLabel>
                      <TextField
                        type="textholder"
                        fullWidth
                        multiline
                        id="about me"
                        variant="outlined"
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
