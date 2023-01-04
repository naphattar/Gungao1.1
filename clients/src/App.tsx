import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Mainpage from './Page/Homepage/Mainpage';
import Loginpage from './Page/Loginpage/Loginpage';
import Registerpage from './Page/Loginpage/Registerpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Mainpage/>}></Route>
        <Route path="/login" element={<Loginpage/>}></Route>
        <Route path="/register" element={<Registerpage/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
