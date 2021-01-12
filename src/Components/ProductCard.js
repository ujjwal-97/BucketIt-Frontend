import { Grid, Button, Paper, Typography, Box } from '@material-ui/core';
import '../Styles/ProductCard.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import UpvotePrimaryIcon from '../images/upvote_Primary.svg';
import UpvoteIcon from '../images/Upvote.svg';
import BucketIcon from '../images/Bucket.svg';
import DownloadIcon from '../images/Download.svg';
import Avatar from '@material-ui/core/Avatar';
//import { Link } from 'react-router-dom';

function ProductCard(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container justify="center" direction="row" spacing={20}>
          <Grid item>
            <Grid container justify="flex-start" direction="column" spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className="upvote-button"
                >
                  Upvote&nbsp;
                  <img src={UpvotePrimaryIcon} alt="upvote icon" />
                </Button>
              </Grid>
              <Grid item>
                <Paper
                  variant="elevation"
                  elevation={0}
                  style={{ color: '#c1c7d2', fontSize: '14px' }}
                  align="center"
                >
                  <Box my={1}>
                    <img src={UpvoteIcon} alt="upvote icon" />
                    &nbsp;{props.quantity}
                  </Box>
                  <Box my={1}>
                    <img src={BucketIcon} alt="bucket icon" />
                    {props.quantity}
                  </Box>
                  <Box my={1}>
                    <img src={DownloadIcon} alt="download icon" />
                    &nbsp;{props.quantity}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box my={0}>
              <Grid container direction="column" justify="start">
                <Paper
                  variant="elevation"
                  elevation={5}
                  className="product-desc"
                >
                  <Grid item>
                    <Grid container direction="row" justify="space-between">
                      <Grid item>
                        <Typography
                          gutterBottom
                          variant="h5"
                          align="left"
                          color="primary"
                        >
                          <strong>{props.productname}</strong>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Box pt={0.75}>
                          <Typography
                            variant="subtitle1"
                            align="right"
                            color="secondary"
                          >
                            <strong>{props.category}</strong>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box my={1}>
                      <Grid item>
                        <Typography variant="subtitle2" align="left">
                          <strong>{props.oneline}</strong>
                        </Typography>
                      </Grid>
                    </Box>
                    <Box my={1}>
                      <Grid item>
                        <Typography
                          color="textPrimary"
                          variant="subtitle2"
                          align="left"
                        >
                          {props.description}
                        </Typography>
                      </Grid>
                    </Box>
                  </Grid>
                </Paper>
              </Grid>
            </Box>
          </Grid>
          <Grid item>
            <Paper
              style={{
                color: '#c1c7d2',
                backgroundColor: '#F0F6FF',
                padding: '8px',
              }}
            >
              <Grid container direction="column" justify="center">
                <Grid item style={{ fontSize: '12px' }}>
                  Posted by
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    spacing={1}
                  >
                    <Grid item>
                      <Avatar style={{ height: '30px', width: '30px' }}>
                        U
                      </Avatar>
                    </Grid>
                    <Grid item>
                      <Box mt={1}>User Name</Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
export default ProductCard;
