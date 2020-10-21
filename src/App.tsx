import React, { useState } from 'react';
import { Navbar } from './Components/Header'
import { Footer } from './Components/Footer'
import { Home } from './Views/Home'
import './App.scss'

function App() {
  //set a boolean flag when the app first loads
  const [someBoolean, setSomeBoolean] = useState<boolean>(false);
  
  return (
    <div className="App">
      <Navbar />
        <Home />
      <Footer />
    </div>
  );
}

export default App;
