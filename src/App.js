import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './theme';
import RegisterPage from './Pages/RegisterPage';
import SignIn from './Pages/SignIn';
import CreateProfilePage from './Pages/CreateProfilePage';
import PostProductPage from './Pages/PostProductPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/createprofile" exact component={CreateProfilePage} />
          <Route path="/postproduct" exact component={PostProductPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
