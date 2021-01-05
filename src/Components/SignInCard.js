import React from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './SignInCard.css';

function SignInCard() {
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
              <strong>Welcome back! Let's get you inside</strong>
            </Typography>
            <Paper
              variant="elevation"
              elevation={5}
              className="login-background"
            >
              <Grid item>
                <Typography align="center">
                  <strong>Sign In</strong>
                </Typography>
              </Grid>
              <Grid item>
                <form>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <TextField
                        type="email"
                        placeholder="Email"
                        fullWidth
                        name="username"
                        variant="outlined"
                        required
                        autoFocus
                        margin="dense"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="password"
                        placeholder="Password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        required
                        margin="dense"
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                      >
                        Sign In
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item>
                <Typography align="center" className="register">
                  New to Bucket It?&nbsp;
                  <Link to="/" className="link">
                    <strong>Register</strong>
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

export default SignInCard;
