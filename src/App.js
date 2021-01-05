import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
//import AdditionalInformation from './Pages/AdditionalInformation';
import theme from './theme';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
