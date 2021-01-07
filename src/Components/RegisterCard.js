import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../Styles/SignInCard.css';

function RegisterCard() {
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    let body = JSON.stringify({ firstname, email, password });
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
            <Typography align="center">
              <strong>
                Are you a first time user? Let's get you registered
              </strong>
            </Typography>
            <Paper
              variant="elevation"
              elevation={5}
              className="login-background"
            >
              <Grid item>
                <Typography align="center">
                  <strong>Register for a free account</strong>
                </Typography>
              </Grid>
              <Grid item>
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="FirstName"
                        fullWidth
                        name="firstname"
                        variant="outlined"
                        required
                        autoFocus
                        margin="dense"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="email"
                        placeholder="Email"
                        fullWidth
                        name="email"
                        variant="outlined"
                        required
                        margin="dense"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      spacing={1}
                      justify="center"
                    >
                      <Grid item className="align-box">
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          required
                          margin="dense"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Grid>
                      <Grid item className="align-box">
                        <TextField
                          type="password"
                          placeholder="Confirm"
                          fullWidth
                          name="confpassword"
                          variant="outlined"
                          required
                          margin="dense"
                          value={confpassword}
                          onChange={(e) => setConfPassword(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                      >
                        Register
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item>
                <Typography align="center" className="register">
                  Already registered?&nbsp;
                  <Link to="/" className="link">
                    <strong>Sign In</strong>
                  </Link>
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default RegisterCard;
