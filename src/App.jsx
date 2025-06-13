
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import User from "./pages/User";
import Products from './pages/Products';

import PostPage from './pages/PostPage';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { UserProvider } from './context/UserContext';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import Counter from './pages/Counter';
import Todo from './pages/Todo';

function App() {
  const[firstName, setFirstName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  return (
    <>
 <Provider store={store}>
    <Navbar firstName={firstName} userEmail={userEmail} />
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path='/login' element={<Login setFirstName={setFirstName} setUserEmail={setUserEmail}/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/postpage" element={<PostPage/>}/>
    <Route path="/counter" element={<Counter/>}/>
    <Route path="/todo" element={<Todo />}/>
    
   </Routes>
</Provider>
   </>
  )
}

export default App
