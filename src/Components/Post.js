import React from 'react';
import { Paper, Box, Grid, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import BucketIcon from '../images/Bucket.svg';
import CommentIcon from '../images/Comment.svg';
import Avatar from '@material-ui/core/Avatar';
import UpvoteIcon from '../images/Upvote.svg';

export default function Post({ product }) {
  return (
    <ThemeProvider theme={theme}>
      <Box mt={2}>
        <Grid item>
          <Paper
            variant="elevation"
            elevation={3}
            style={{
              width: '800px',
              marginInline: '8px',
              padding: '10px 10px',
            }}
          >
            <Box display="flex" direction="row" justify="flex-start">
              <Grid item style={{ margin: 'px' }}>
                <div>
                  <img src={UpvoteIcon} alt="bucket icon" />
                </div>
                <div>{product.id}</div>
              </Grid>
              <Grid item style={{ margin: '2px' }}>
                <Avatar variant="square" sizes="large">
                  N
                </Avatar>
              </Grid>
              <Grid item style={{ marginLeft: '10px' }}>
                <Grid container direction="row" justify="space-between">
                  <Grid item>
                    <Typography
                      gutterBottom
                      variant="h5"
                      align="left"
                      color="primary"
                    >
                      <strong>{product.title.split(' ')[0]}</strong>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Box pt={1}>
                      <Typography
                        variant="subtitle1"
                        align="right"
                        color="secondary"
                      >
                        <strong>{product.id}</strong>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box>
                  <Grid item>
                    <Typography color="textPrimary" variant="subtitle2">
                      {product.body}
                    </Typography>
                  </Grid>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row-reverse"
                  style={{ color: '#c1c7d2' }}
                >
                  <div>
                    <Box display="flex" flexDirection="row" my={1}>
                      <div>
                        <img src={BucketIcon} alt="bucket icon" />
                      </div>
                      <div style={{ padding: '0px' }}>
                        &nbsp;
                        {product.id}&nbsp;Buckets
                      </div>
                    </Box>
                  </div>
                  &nbsp;&nbsp;
                  <div>
                    <Box display="flex" flexDirection="row" my={1}>
                      <div>
                        <img src={CommentIcon} alt="bucket icon" />
                      </div>
                      <div style={{ padding: '0px' }}>
                        &nbsp;
                        {product.id}&nbsp;Comments
                      </div>
                    </Box>
                  </div>
                </Box>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
