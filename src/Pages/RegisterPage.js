import React from 'react';
import Navbar from '../Components/Navbar';
import RegisterCard from '../Components/RegisterCard';
//import { Typography } from '@material-ui/core';

function RegisterPage() {
  return (
    <>
      <Navbar signin={true} disablePost={false} />
      <RegisterCard />
    </>
  );
}
export default RegisterPage;
