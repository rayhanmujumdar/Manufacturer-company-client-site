import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import KeepNavbar from './Component/Shared/Navbar/KeepNavbar';
import NotFound from './Component/Shared/NotFound/NotFound';
import PrivateAdmin from './Component/Shared/PrivateAdmin/PrivateAdmin';
import PrivateUser from './Component/Shared/PrivateUser/PrivateUser';
import RequiredAuth from './Component/Shared/RequiredAuth/RequiredAuth';
import Blog from './Component/pages/Blog/Blog';
import AddProduct from './Component/pages/Dashboard/AddProduct';
import AddReview from './Component/pages/Dashboard/AddReview';
import Dashboard from './Component/pages/Dashboard/Dashboard';
import MakeAdmin from './Component/pages/Dashboard/MakeAdmin';
import ManageAllOrders from './Component/pages/Dashboard/ManageAllOrders';
import ManageProduct from './Component/pages/Dashboard/ManageProduct';
import MyOrders from './Component/pages/Dashboard/MyOrders';
import Payment from './Component/pages/Dashboard/Payment';
import Profile from './Component/pages/Dashboard/Profile';
import Home from './Component/pages/Home/Home';
import ForgetPassword from './Component/pages/Login/ForgetPassword';
import Login from './Component/pages/Login/Login';
import MyPortfolio from './Component/pages/MyPortfolio/MyPortfolio';
import Products from './Component/pages/Products/Products';
import PurchaseProduct from './Component/pages/PurchaseProduct/PurchaseProduct';
import Reviews from './Component/pages/Reviews/Reviews';
import SignUp from './Component/pages/SignUp/SignUp';

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="App bg-gray-100">
            {/* <Navbar /> */}
            <KeepNavbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route
                    path="/products"
                    element={
                        <RequiredAuth>
                            <Products />
                        </RequiredAuth>
                    }
                ></Route>
                <Route
                    path="/product/:id"
                    element={
                        <RequiredAuth>
                            <PurchaseProduct />
                        </RequiredAuth>
                    }
                ></Route>
                <Route
                    path="/reviews"
                    element={
                        <RequiredAuth>
                            <Reviews />
                        </RequiredAuth>
                    }
                ></Route>
                {/* dashboard section router */}
                <Route
                    path="/dashboard"
                    element={
                        <RequiredAuth>
                            <Dashboard />
                        </RequiredAuth>
                    }
                >
                    <Route index element={<Profile />}></Route>
                    <Route
                        path="/dashboard/my-orders"
                        element={
                            <PrivateUser>
                                <MyOrders />
                            </PrivateUser>
                        }
                    ></Route>
                    <Route
                        path="/dashboard/add-review"
                        element={
                            <PrivateUser>
                                <AddReview />
                            </PrivateUser>
                        }
                    ></Route>
                    <Route
                        path="/dashboard/payment/:id"
                        element={
                            <PrivateUser>
                                <Payment />
                            </PrivateUser>
                        }
                    ></Route>
                    <Route
                        path="/dashboard/add-product"
                        element={
                            <PrivateAdmin>
                                <AddProduct />
                            </PrivateAdmin>
                        }
                    ></Route>
                    <Route
                        path="/dashboard/manage-product"
                        element={
                            <PrivateAdmin>
                                <ManageProduct />
                            </PrivateAdmin>
                        }
                    ></Route>
                    <Route
                        path="/dashboard/make-admin"
                        element={
                            <PrivateAdmin>
                                <MakeAdmin />
                            </PrivateAdmin>
                        }
                    ></Route>
                    <Route
                        path="/dashboard/manage-all-orders"
                        element={
                            <PrivateAdmin>
                                <ManageAllOrders />
                            </PrivateAdmin>
                        }
                    ></Route>
                </Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/my-portfolio" element={<MyPortfolio />}></Route>
                <Route path="/signUp" element={<SignUp />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                    path="/forget_password"
                    element={<ForgetPassword />}
                ></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Toaster />
        </div>
    );
}

export default App;
