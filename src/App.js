import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/pages/Home/Home';
import Login from './Component/pages/Login/Login';
import SignUp from './Component/pages/SignUp/SignUp';
import Navbar from './Component/Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import RequiredAuth from './Component/Shared/RequiredAuth/RequiredAuth';
import Products from './Component/pages/Products/Products';
import PurchaseProduct from './Component/pages/PurchaseProduct/PurchaseProduct';
import NotFound from './Component/Shared/NotFound/NotFound';
import Dashboard from './Component/pages/Dashboard/Dashboard';
import Reviews from './Component/pages/Reviews/Reviews';
import Profile from './Component/pages/Dashboard/Profile';
import MyOrders from './Component/pages/Dashboard/MyOrders';

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
        <Route path='/product/:id' element={
        <RequiredAuth>
          <PurchaseProduct></PurchaseProduct>
        </RequiredAuth>}></Route>
        <Route path='/reviews' element={
        <RequiredAuth>
          <Reviews></Reviews>
        </RequiredAuth>}></Route>
        <Route path='/dashboard' element={<RequiredAuth>
          <Dashboard></Dashboard>
        </RequiredAuth>}>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='/dashboard/my-orders' element={<MyOrders></MyOrders>}></Route>
        </Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
