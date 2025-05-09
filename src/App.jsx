
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import User from "./pages/User";
import Products from './pages/Products';

function App() {


  return (
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/products" element={<Products/>}/>
   </Routes>
  )
}

export default App
