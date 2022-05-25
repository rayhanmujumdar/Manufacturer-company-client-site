import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-dashboard" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/*   */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-dashboard" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="my-profile">My Profile</Link>
          </li>
          <li>
            <Link to="my-orders">My Orders</Link>
          </li>
          <li>
            <Link to="add-review">Add a Review</Link>
          </li>
          {(
            <>
              <li>
                <Link to="manage-all-orders">Manage All Orders</Link>
              </li>
              <li>
                <Link to="add-product">Add a Product</Link>
              </li>
              <li>
                <Link to="make-admin">Make Admin</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
