import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Adduser = () => {
  const Navigate = useNavigate();
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

  // const onSubmit = async (e)=>{
   
  //   e.preventDefault();
  //   if(
  //     // setuser({[!name]: [!value] })
  //   ){
  //      alert("Plz filled data");
  //   }else{
  //     await axios.post("http://localhost:3001/users" ,user);
  //     Navigate("/");
  //     }
  //   }
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    alert("User Added Succesfully");
    Navigate("/"); /// to push back to the home page
  };

  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-2">Add A User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                value={user.name} 
                onChange={(e) => HandleChange(e)}
                name="name"
                type="name"
                className="form-control mx-3 my-2"
                id="Name1"
                placeholder=" Enter Your Name"
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
                type="number"
                className="form-control mx-3 my-2 "
                id="phone1"
                placeholder="Phone-Number"
              />
              <input
                value={user.role}
                onChange={(e) => HandleChange(e)} //call only when pg change
                name="role"
                type="role"
                className="form-control mx-3 my-2 "
                id="role1"
                placeholder="Role in Company"
              />
            </div>
            <button type="submit" className="btn btn-primary mx-3">
              ADD-USER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adduser;
