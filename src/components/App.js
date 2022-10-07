import React, { lazy } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Signin from '../pages/signin';

function App({ history, onSignIn, isolate }) {
  lazy(isolate ? import('antd/dist/antd.css') : '');
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={() => <Signin onSignIn={onSignIn} />} />
        <Route path="/auth/signin" render={() => <Signin onSignIn={onSignIn} />} />
      </Switch>
    </Router>
  );
}

export default App;
