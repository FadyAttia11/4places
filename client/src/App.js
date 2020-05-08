import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import About from './components/about/about'
import Login from './components/login/login'
import Signup from './components/signup/signup'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
