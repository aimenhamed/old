import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
 } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Projects} path='/projects' />
        <Route component={Experience} path='/experience' />
      </Switch>
    </Router>
  );
}

export default App;
