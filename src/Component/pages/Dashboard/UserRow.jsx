import React, { useState } from "react";
import toast from "react-hot-toast";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import useAdmin from "../../../Hooks/useAdmin";
import DeleteUserModal from "./DeleteUserModal";

const UserRow = ({ user, index }) => {
  const { email, role } = user;
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleAdmin = async (email) => {
    const url = `http://localhost:5000/user/admin/${email}`;
    const { data } = await axiosPrivate.put(url);
    if (data.modifiedCount > 0) {
      toast.success("New Admin Added", {
        id: "success",
      });
    }
  };
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <tr className="hover">
        <th>{index + 1}</th>
        <td>
          {email}{" "}
          <span className="text-green-400">
            {role === "admin" && "(admin)"}
          </span>
        </td>
        <td>
          {role !== "admin" && (
            <button
              onClick={() => handleAdmin(email)}
              className="btn btn-sm mr-2 btn-success"
            >
              make Admin
            </button>
          )}
        </td>
        <td>
          {role !== "admin" && (
            <button onClick={openModal} className="btn btn-sm btn-error">
              Delete User
            </button>
          )}
        <DeleteUserModal
        user={user}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        ></DeleteUserModal>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
