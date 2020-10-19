import React from 'react';
import { Navbar } from './Components/Header'
import { Footer } from './Components/Footer'
import { Home } from './Views/Home'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Home />
      <Footer />
    </div>
  );
}

export default App;
