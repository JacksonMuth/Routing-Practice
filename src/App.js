import React from 'react';
import { Router } from '@reach/router'
import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import WordStyle from './components/WordStyle';

function App() {
  return (
    <div className="App">

      <Router>
        <Home path="/home/" default/>
        <Number path="/:number/" />
        <WordStyle path="/:word/:color1/:color2/"/>
      </Router>
    </div>
  );
}

export default App;
