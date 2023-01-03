import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Mainpage from './Page/Homepage/Mainpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Mainpage/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
