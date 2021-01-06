import React from 'react';
import Navbar from '../Components/Navbar';
import SignInCard from '../Components/SignInCard';
//import { Typography } from '@material-ui/core';

function SignIn() {
  return (
    <>
      <Navbar register={true} />
      <SignInCard />
    </>
  );
}
export default SignIn;
