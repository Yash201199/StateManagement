import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const View = () => {
  const [user, setUser] = useState({
    Fullname: " ",
    username: "",
    phone: "",
    email: "",
    role: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
       <NavLink className="btn btn-primary my-3" to="/">
        Back To Home
      </NavLink>
      <h1 className="display-4 text-info" >User Id: {id} </h1>
      <div className="container">
      <hr />
        <ul className="list-group w-50 ">
          <li className="list-group-items">name: {user.name}</li>
          <li className="list-group-items">user name: {user.username}</li>
          <li className="list-group-items">email: {user.email}</li>
          <li className="list-group-items">phone: {user.phone}</li>
          <li className="list-group-items">role: {user.role}</li>
        </ul>
        </div>
    </div>
  );
};

export default View;
