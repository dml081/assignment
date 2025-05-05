
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import User from "./pages/User";

function App() {


  return (
   <Routes>
    <Route path="/homepage" element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/signup" element={<Signup/>}/>
   </Routes>
  )
}

export default App
