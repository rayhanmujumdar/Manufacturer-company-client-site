import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from '../../Shared/PageTitle/PageTitle'
import Footer from '../../Shared/Footer/Footer'
import DashBoardLink from "../../Shared/DashBoardLink/DashBoardLink";

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin,loading] = useAdmin(user)
  if(loading){
    return <Loading className='text-black'></Loading>
  }
  return (
    <>
    <div className="drawer drawer-mobile">
      <PageTitle title='Dashboard'></PageTitle>
      <input id="my-dashboard" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-start">
        <h1 className="text-4xl mb-4">My DashBoard</h1>
        {/*   */}
          <Outlet/>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-dashboard" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <DashBoardLink to='/dashboard'>My Profile</DashBoardLink>
          </li>
          {!admin && <>
            <li>
            <DashBoardLink to="my-orders">My Orders</DashBoardLink>
          </li>
          <li>
            <DashBoardLink to="add-review">Add a Review</DashBoardLink>
          </li>
          </>}
          {admin && (
            <>
              <li>
                <DashBoardLink to="manage-all-orders">Manage All Orders</DashBoardLink>
              </li>
              <li>
                <DashBoardLink to="add-product">Add a Product</DashBoardLink>
              </li>
              <li>
                <DashBoardLink to="manage-product">Manage Product</DashBoardLink>
              </li>
              <li>
                <DashBoardLink to="make-admin">Make Admin</DashBoardLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
