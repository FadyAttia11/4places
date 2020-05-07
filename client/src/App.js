import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import About from './components/about/about'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
