import React, { useState, useEffect,  } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    loadUsers();
    // console.log("kaisa hai bro");
  }, []); //[] is dependancy it means it'll run once

  ///to load a user
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    // console.log(result);
    
    setuser(result.data);
  };
  const deleteUser = async (id) => {
    
    await axios.delete(`http://localhost:3001/users/${id}`);
    alert("User deleted Succesfully");
    loadUsers();
  };
  return (
    <>
      <div className="container">
        <div className="homepage">
          <table className="table table-hover border shadow">
            <tbody className="thead-dark" >
            
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </tbody>
            {user.map((user, index) => (
              <tbody  key={index}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <NavLink
                      to={`/users/${user.id}`}
                      className="btn btn-primary mr= 2  btn-ln opacity-60 "
                    >
                      View
                    </NavLink>
                    <NavLink
                      to={`/users/edit/${user.id}`}
                      className="btn btn-outline-primary mr=2  btn-ln opacity-60 "
                    >
                      Edit
                    </NavLink>
                    <NavLink
                      className="btn btn-danger mr=2  btn-ln opacity-60" to="#"
                      onClick={() => deleteUser(user.id)}>
                      Delete
                    </NavLink>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Homepage;
