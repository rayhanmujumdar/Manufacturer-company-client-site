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
import Payment from './Component/pages/Dashboard/Payment';
import AddReview from './Component/pages/Dashboard/AddReview';
import AddProduct from './Component/pages/Dashboard/AddProduct';
import ManageProduct from './Component/pages/Dashboard/ManageProduct';
import MakeAdmin from './Component/pages/Dashboard/MakeAdmin';
import PrivateAdmin from './Component/Shared/PrivateAdmin/PrivateAdmin';
import PrivateUser from './Component/Shared/PrivateUser/PrivateUser';
import ManageAllOrders from './Component/pages/Dashboard/ManageAllOrders';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init()
  },[])
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
        {/* dashboard section router */}
        <Route path='/dashboard' element={<RequiredAuth>
          <Dashboard></Dashboard>
        </RequiredAuth>}>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='/dashboard/my-orders' element={<PrivateUser><MyOrders></MyOrders></PrivateUser>}></Route>
          <Route path='/dashboard/add-review' element={<PrivateUser><AddReview></AddReview></PrivateUser>}></Route>
          <Route path='/dashboard/payment' element={<Payment></Payment>}></Route>
          <Route path='/dashboard/add-product' element={<PrivateAdmin><AddProduct></AddProduct></PrivateAdmin>}></Route>
          <Route path='/dashboard/manage-product' element={<PrivateAdmin><ManageProduct></ManageProduct></PrivateAdmin>}></Route>
          <Route path='/dashboard/make-admin' element={<PrivateAdmin><MakeAdmin></MakeAdmin></PrivateAdmin>}></Route>
          <Route path='/dashboard/manage-all-orders' element={<PrivateAdmin><ManageAllOrders></ManageAllOrders></PrivateAdmin>}></Route>
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
