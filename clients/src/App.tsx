import { Route, Routes} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Chatmain from './Page/Chat/Chatmain';
import Mainpage from './Page/Mainpage/Mainpage';
import Loginpage from './Page/Loginpage/Loginpage';
import Registerpage from './Page/Loginpage/Registerpage';
import Errorpage from './Page/Errorpage/Errorpage';
import Howtousepage from './Page/Howtousepage/Howtousepage';
import Aboutmepage from './Page/Aboutmepage/Aboutmepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Mainpage/>}></Route>
        <Route path="/login" element={<Loginpage/>}></Route>
        <Route path="/register" element={<Registerpage/>}></Route>
        <Route path="/chat">
          <Route path=":roomID" element={<Chatmain/>}></Route>
        </Route>
        <Route path="/error" element={<Errorpage/>}></Route>
        <Route path="/howtouse" element={<Howtousepage/>}></Route>
        <Route path="/aboutus" element={<Aboutmepage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
