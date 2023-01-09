import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Mentoria from './components/Mentoria'
import Aprende from './components/Aprende'
import './App.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home/>
      <About/>
      <Mentoria/>
      <Aprende/>
    </div>
  );
}

export default App;
