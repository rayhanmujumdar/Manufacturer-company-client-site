import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/pages/Home/Home';
import Login from './Component/pages/Login/Login';
import SignIn from './Component/pages/SignIn/SignIn';
import Navbar from './Component/Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Product from './Component/pages/Product/Product';
import RequiredAuth from './Component/Shared/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product' element={
          <RequiredAuth>
            <Product></Product>
          </RequiredAuth>
        }></Route>
        <Route path='/signUp' element={<SignIn></SignIn>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
