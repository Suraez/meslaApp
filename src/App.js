import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import {BrowserRouter,Switch,Route } from 'react-router-dom';
import JobList from './Jobs/JobList';

function App() {
  return (
  <>
    <Header />
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component ={Contact} />
      <Route exact path="/jobs" component ={JobList} />
      </Switch> 
      </BrowserRouter>  
    <Footer />
  </>
  );
}

export default App;
