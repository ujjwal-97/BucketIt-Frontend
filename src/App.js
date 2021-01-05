import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './theme';
import Registerpage from './Pages/Registerpage';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/register" exact component={Registerpage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
