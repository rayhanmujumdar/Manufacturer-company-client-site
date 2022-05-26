import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";
import DeleteUserModal from "./DeleteUserModal";
import MakeAdminModal from "./MakeAdminModal";

const UserRow = ({ user, index, refetch }) => {
  const [authUser] = useAuthState(auth);
  const { email, role } = user;
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [adminModalIsOpen, setAdminModalIsOpen] = useState(false);
  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }
  function openAdminModal() {
    setAdminModalIsOpen(true);
  }
  return (
    <>
      <tr data-aos="fade-right" className="hover">
        <th>{index + 1}</th>
        <td>
          {email}{" "}
          <span className="text-green-400">
            {role === "admin" && email === authUser?.email
              ? "(admin (Me))"
              : role === "admin" && "(admin)"}
          </span>
        </td>
        <td>
          {role !== "admin" && (
            <button
              onClick={openAdminModal}
              className="btn btn-sm mr-2 btn-success"
            >
              make Admin
            </button>
          )}
        </td>
        <td>
          {email !== authUser?.email && (
            <button disabled={role !== "admin"} onClick={openDeleteModal} className="btn btn-sm btn-error">
              Delete Admin
            </button>
          )}
          <DeleteUserModal
            refetch={refetch}
            user={user}
            deleteModalIsOpen={deleteModalIsOpen}
            setDeleteModalIsOpen={setDeleteModalIsOpen}
          ></DeleteUserModal>
          <MakeAdminModal
            refetch={refetch}
            user={user}
            setAdminModalIsOpen={setAdminModalIsOpen}
            adminModalIsOpen={adminModalIsOpen}
          ></MakeAdminModal>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
