import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import AdditionalInformation from './Pages/AdditionalInformation';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AdditionalInformation />
    </ThemeProvider>
  );
}

export default App;
