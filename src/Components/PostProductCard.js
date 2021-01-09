import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper,
  InputLabel,
  Typography,
  Box,
  Select,
  MenuItem,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
//import MenuItem from '@material-ui/core/MenuItem';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(1),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),

    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

function PostProductCard() {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [appLink, setAppLink] = useState('');
  const [oneLineSummary, setOneLineSummary] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    let body = JSON.stringify({
      productName,
      category,
      websiteLink,
      appLink,
      oneLineSummary,
      description,
    });
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
            <Box my={4}>
              <Typography variant="h5">
                <strong>Post a Product</strong>
              </Typography>
            </Box>
            <Paper
              variant="elevation"
              elevation={5}
              className="login-background"
            >
              <Grid item>
                <Typography align="center">
                  <strong>Product Details</strong>
                </Typography>
              </Grid>
              <Grid item>
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <InputLabel htmlFor="productName">
                        Product Name
                      </InputLabel>
                      <TextField
                        type="text"
                        fullWidth
                        required
                        id="productName"
                        variant="outlined"
                        autoFocus
                        margin="dense"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <InputLabel id="catergory">Category</InputLabel>
                      <Select
                        labelId="catergory"
                        id="catergory"
                        value={category}
                        fullWidth
                        required
                        onChange={(e) => setCategory(e.target.value)}
                        input={<BootstrapInput />}
                      >
                        <MenuItem value={'EdTech'}>EdTech</MenuItem>
                        <MenuItem value={'E-Commerce'}>E-Commerce</MenuItem>
                        <MenuItem value={'Cabs'}>Cabs</MenuItem>
                        <MenuItem value="Other">
                          <em>Other</em>
                        </MenuItem>
                      </Select>
                    </Grid>
                    <Grid item>
                      <InputLabel htmlFor="websiteLink">
                        Website Link
                      </InputLabel>
                      <TextField
                        type="text"
                        fullWidth
                        id="websiteLink"
                        variant="outlined"
                        margin="dense"
                        value={websiteLink}
                        onChange={(e) => setWebsiteLink(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <InputLabel htmlFor="appLink">App Link</InputLabel>
                      <TextField
                        type="text"
                        fullWidth
                        id="appLink"
                        variant="outlined"
                        margin="dense"
                        value={appLink}
                        onChange={(e) => setAppLink(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <InputLabel htmlFor="oneLineSummary">
                        One line summary (Character limit:300)
                      </InputLabel>
                      <TextField
                        type="textholder"
                        fullWidth
                        multiline
                        id="oneLineSummary"
                        variant="outlined"
                        margin="dense"
                        rows={2}
                        rowsMax={5}
                        value={oneLineSummary}
                        onChange={(e) => setOneLineSummary(e.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <InputLabel htmlFor="description">
                        Product Description
                      </InputLabel>
                      <TextField
                        type="textholder"
                        fullWidth
                        multiline
                        required
                        id="description"
                        variant="outlined"
                        margin="dense"
                        rows={8}
                        rowsMax={14}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </Grid>

                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                      >
                        Review
                      </Button>
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
export default PostProductCard;
