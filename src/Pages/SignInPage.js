import React from 'react';
import Navbar from '../Components/Navbar';
import SignInCard from '../Components/SignInCard';
//import { Typography } from '@material-ui/core';

function SignInPage() {
  return (
    <>
      <Navbar register={true} disablePost={false} />
      <SignInCard />
    </>
  );
}
export default SignInPage;
