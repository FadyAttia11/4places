import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import About from './components/about/about'
import Login from './components/login/login'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
