import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import AboutUs from './components/pages/AboutUs';
import Dashboard from './components/pages/Dashboard';
import Features from './components/pages/Features';
import Homepage from './components/pages/Homepage';
import Register from './components/pages/Register';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} />
        </Switch>
        <Switch>
          <Route path='/features' exact component={Features} />
        </Switch>
        <Switch>
          <Route path='/about-us' exact component={AboutUs} />
        </Switch>
        <Switch>
          <Route path='/register' exact component={Register} />
        </Switch>
        <Switch>
          <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
        {/* <Switch>
          <Route path='/login' exact component={Login} />
        </Switch> */}
      </Router>
    </>
  );
}

export default App;
