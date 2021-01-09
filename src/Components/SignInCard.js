import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../Styles/SignInCard.css';

function SignInCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    let body = JSON.stringify({ email, password });
    console.log(body);
  };

  return (
    <div>
      <Grid container justify="center" direction="row">
        <Grid item>
          <Box my={-15}>
            <Grid
              container
              justify="flex-start"
              direction="column"
              className="login-form"
            >
              <Box my={5}>
                <Typography align="center">
                  <strong>Welcome back! Let's get you inside</strong>
                </Typography>
              </Box>
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
                  <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={1}>
                      <Grid item>
                        <TextField
                          type="email"
                          placeholder="Email"
                          fullWidth
                          name="email"
                          variant="outlined"
                          required
                          autoFocus
                          margin="dense"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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
                    <Link to="/register" className="link">
                      <strong>Register</strong>
                    </Link>
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignInCard;
