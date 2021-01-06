import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './theme';
import Registerpage from './Pages/Registerpage';
import SignIn from './Pages/SignIn';
import CreateProfilePage from './Pages/CreateProfilePage';
import PostProductpage from './Pages/PostProductpage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/register" exact component={Registerpage} />
          <Route path="/createprofile" exact component={CreateProfilePage} />
          <Route path="/postproduct" exact component={PostProductpage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
