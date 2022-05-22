import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/pages/Home/Home';
import Login from './Component/pages/Login/Login';
import SignUp from './Component/pages/SignUp/SignUp';
import Navbar from './Component/Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import RequiredAuth from './Component/Shared/RequiredAuth/RequiredAuth';
import Products from './Component/pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={
          <RequiredAuth>
            <Products></Products>
          </RequiredAuth>
        }></Route>
        <Route path='/product/:id' element={}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
