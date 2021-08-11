import React, { Fragment, } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

const App = () =>
  <Fragment>
    <Router>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className='container'>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exect path='/login' component={Login} />
        </Switch>
      </section>
    </Router>
  </Fragment>

export default App;
