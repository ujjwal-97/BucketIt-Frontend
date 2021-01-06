import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper,
  InputLabel,
  Typography,
} from '@material-ui/core';

function PostProductCard() {
  const [productName, setProductName] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [appLink, setAppLink] = useState('');
  const [oneLineSummary, setOneLineSummary] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    let body = JSON.stringify({
      productName,
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
            <Typography variant="h5" align="center">
              <strong>Post a Product</strong>
            </Typography>
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
                        id="description"
                        variant="outlined"
                        margin="dense"
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
