import React from 'react';
import Navbar from '../Components/Navbar';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
//import Typography from '@material-ui/core/Typography';
import ReviewProductCard from '../Components/ReviewProductCard';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    width: '90%',
    marginLeft: '30%',
  },
});

const theme = createMuiTheme({
  typography: {
    fontSize: 10,
  },
});

function ReviewProductPage(props) {
  const classes = useStyles();

  return (
    <>
      <Navbar register={true} disablePost={true} />
      <ThemeProvider theme={theme}>
        <div className={classes.root}></div>
      </ThemeProvider>
      <ReviewProductCard
        productname={"BYJU'S"}
        category={'FINTECH'}
        oneline={'Indian education technology and education firm'}
        description={
          ' The Learning App is an Indian educational technology (edtech) and online tutoring firm founded in 2011 by Byju Raveendran. The company with a valuation of $11.1 billion.'
        }
        website={'www.byjus.com'}
        applink={'www.byjus.com/applink'}
      />
    </>
  );
}
export default ReviewProductPage;
