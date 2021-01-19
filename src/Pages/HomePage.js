import React from 'react';
import Navbar from '../Components/Navbar';
import HomeCard from '../Components/HomeCard';
import { Grid } from '@material-ui/core';

function HomePage() {
  return (
    <>
      <Navbar register={true} disablePost={false} loggedin={true} />
      <Grid container direction="row" justify="center">
        <Grid item>
          <HomeCard />
        </Grid>
      </Grid>
    </>
  );
}
export default HomePage;
