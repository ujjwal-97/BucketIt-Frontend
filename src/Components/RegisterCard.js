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

function RegisterCard() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    let body = JSON.stringify({ firstname, lastname, email, password });
    console.log(body);
  };

  return (
    <div>
      <Grid container justify="center" direction="row">
        <Grid item>
          <Box my={-15}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
              className="login-form"
            >
              <Box my={5}>
                <Typography align="center">
                  <strong>
                    Are you a first time user? Let's get you registered
                  </strong>
                </Typography>
              </Box>
              <Paper
                variant="elevation"
                elevation={5}
                className="login-background"
              >
                <Grid item>
                  <Box my={1}>
                    <Typography align="center">
                      <strong>Register for a free account</strong>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={1}>
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        justify="center"
                      >
                        <Grid item className="align-box">
                          <TextField
                            type="text"
                            placeholder="First Name"
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
                        <Grid item className="align-box">
                          <TextField
                            type="text"
                            placeholder="Last Name"
                            fullWidth
                            name="lastname"
                            variant="outlined"
                            required
                            margin="dense"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </Grid>
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
                        <Box my={1}>
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className="button-block"
                          >
                            Register
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item>
                  <Typography align="center" className="register" spacing={1}>
                    Already registered?&nbsp;
                    <Link
                      style={{ textDecoration: 'none', color: '#1574F6' }}
                      to="/"
                    >
                      <strong>Sign In</strong>
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

export default RegisterCard;
