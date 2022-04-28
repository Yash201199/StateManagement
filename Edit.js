import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  //   alert(id);
  const [user, setuser] = useState({
    Fullname: "",
    username: "",
    email: "",
    phone: "",
    role: "",
  });

  const HandleChange = (e) => {
    var name, value;
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: [value] });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    Navigate("/"); /// to navigate back to the home page
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setuser(result.data);
    // console.log(result);
  };
  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-2">Edit A User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                value={user.name}
                onChange={(e) => HandleChange(e)}
                name="name"
                type="name"
                className="form-control mx-3 my-2"
                id="Name1"
                placeholder="Your Name"
              />
              <input
                value={user.username}
                onChange={(e) => HandleChange(e)}
                name="username"
                type="username"
                className="form-control mx-3 my-2"
                id="username1"
                placeholder="UserName"
              />
              <input
                value={user.email}
                onChange={(e) => HandleChange(e)}
                name="email"
                type="Email"
                className="form-control mx-3 my-2"
                id="email1"
                placeholder="E-mail Adress"
              />
              <input
                value={user.phone}
                onChange={(e) => HandleChange(e)}
                name="phone"
                type="phone"
                className="form-control mx-3 my-2 "
                id="phone1"
                placeholder="Phone-Number"
              />
              <input
                value={user.role}
                onChange={(e) => HandleChange(e)} 
                name="role"
                type="role"
                className="form-control mx-3 my-2 "
                id="role1"
                placeholder="Role in Company"
              />
            </div>
            <button type="submit" className="btn btn-danger mx-4 ">
              UPDATE USER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
