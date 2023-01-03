import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Page/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
