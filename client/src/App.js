import React from 'react';
import './App.css'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home/home'
import About from './components/about/about'
import Login from './components/login/login'
import Signup from './components/signup/signup'

import Toolbar from './components/Toolbar/Toolbar.js'
import SideDrawer from './components/SideDrawer/SideDrawer.js';
import Backdrop from './components/Backdrop/Backdrop.js';
import Footer from './components/Footer/Footer.js'
import MainScreen from './components/MainScreen/MainScreen'
import Discover from './components/Discover/Discover'
import Users from './components/Users/Users'


class App extends React.Component{
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render(){
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <BrowserRouter>
        <div className="container">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}

          <main className="main-container">

            <Route exact path='/' component={MainScreen} />
            <Route path='/about' component={About} />
            <Route path='/Discover' component={Discover} />
            <Route path='/Users' component={Users} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
