import React from 'react';
import Navbar from '../Components/Navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import ProductCard from '../Components/ProductCard';
import theme from '../theme';

function ProductPage(props) {
  return (
    <>
      <Navbar register={true} disablePost={true} />
      <ThemeProvider theme={theme}>
        <ProductCard
          productname={"BYJU'S"}
          category={'FINTECH'}
          oneline={'Indian education technology and education firm'}
          description={
            ' The Learning App is an Indian educational technology (edtech) and online tutoring firm founded in 2011 by Byju Raveendran. The company with a valuation of $11.1 billion.'
          }
          website={'www.byjus.com'}
          quantity={255}
          applink={'www.byjus.com/applink'}
        />
      </ThemeProvider>
    </>
  );
}
export default ProductPage;
