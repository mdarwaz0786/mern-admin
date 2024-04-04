import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/all-users");
      setUsers(response.data.users);
    } catch (error) {
      console.log("Error while fetching users", error);
    };
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/delete-user/${userId}`);
      fetchUsers();
    } catch (error) {
      console.log("Error while deleting user", error);
    };
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div style={{ width: "82vw", marginLeft: "1rem" }}>
        <div className="dashboard-heading mt-1 d-flex justify-content-between">
          <h4>All Users</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/" className="text-black">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">All User</li>
            </ol>
          </nav>
        </div>

        <div className="card w-100 d-flex justify-content-center align-items-center">
          <h5 className="card-header">All Users</h5>
          <div className="card-body">
            <table className="table" style={{ width: "80vw", marginLeft: "1rem" }}>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Registration Date</th>
                  <th className="px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.fullName}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{user.createdAt}</td>
                      <td>
                        <button className="btn btn-sm btn-danger m-3" onClick={() => handleDeleteUser(user._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUser;
