import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
 } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Projects} path='/projects' />
      </Switch>
    </Router>
  );
}

export default App;
