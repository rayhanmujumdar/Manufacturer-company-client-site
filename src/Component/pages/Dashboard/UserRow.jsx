import React from "react";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import useAdmin from "../../../Hooks/useAdmin";

const UserRow = ({ user, index,authUser }) => {
  const { email } = user;
  const [admin] = useAdmin(authUser)
    const handleAdmin = async(email) => {
        const url = `https://fast-river-13040.herokuapp.com/user/admin/${email}`
        const {data} = await axiosPrivate.put(url)
        console.log(data)
    }
  return (
    <>
      <tr className="hover">
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>
            {!admin && <button onClick={() => handleAdmin(email)}  className="btn btn-sm mr-2 btn-success">make Admin</button>}
        </td>
        <td>
            <button  className="btn btn-sm btn-error">Delete User</button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
