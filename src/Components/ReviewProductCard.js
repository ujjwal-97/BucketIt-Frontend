import { Button, Grid, Paper, Typography, Box } from '@material-ui/core';
import '../Styles/SignInCard.css';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

function ReviewProductCard(props) {
  return (
    <div>
      <Grid container justify="center" direction="row">
        <Grid item>
          <Box my={-15}>
            <Grid
              container
              direction="column"
              justify="center"
              className="product-review"
            >
              <Box my={2}>
                <Typography variant="h5">
                  <strong>Review Product Details</strong>
                </Typography>
              </Box>
              <Paper
                variant="elevation"
                elevation={5}
                className="login-background"
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
                      <Typography variant="subtitle2" align="left">
                        {props.description}
                      </Typography>
                    </Grid>
                  </Box>
                  <Box my={1}>
                    <Grid item>
                      <Typography variant="subtitle2" align="left">
                        Website:&nbsp;
                        <a href={props.website}>{props.website}</a>
                      </Typography>
                    </Grid>
                  </Box>
                  <Box my={1}>
                    <Grid item>
                      <Typography variant="subtitle2" align="left">
                        App link:&nbsp;
                        <a href={props.applink}>{props.applink}</a>
                      </Typography>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item>
                  <Box mt={3}>
                    <Grid
                      container
                      direction="row"
                      spacing={10}
                      justify="center"
                    >
                      <Grid item className="align-box">
                        <Button
                          variant="outlined"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          POST PRODUCT
                        </Button>
                      </Grid>
                      <Grid item className="align-box">
                        <Button
                          className="button-block"
                          variant="contained"
                          color="primary"
                        >
                          EDIT
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Paper>
              <Box my={4}>
                <Box variant="outlined" className="fixed-notification">
                  <Grid container direction="row" justify="center">
                    <Grid item>
                      <ErrorOutlineIcon color="primary" fontSize="large" />
                    </Grid>
                    <Grid item>
                      <Typography variant="h7">
                        We will review your product details and notify you
                        <br /> on your registered E-mail when product is live.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default ReviewProductCard;
