import axios from 'axios';
import React , {useState , useEffect} from 'react'
import { Navigate, NavLink } from 'react-router-dom';
// import "./Register.css";

const Register = () => {


 const [state, setstate] = useState({
     name:"", email:"", password:"", cpassword:"",phone:"",
 });


 /////
  const hndlChange = (e) =>{
      e.preventDefault();
      var name , value;
      name = e.target.name;
      value = e.target.value;
      setstate({...state , [name]:[value]});
     
  };

  useEffect(() => {
    return () => {
      submitForm();
    };
  }, []);
  
 const submitForm =async (e)=>{
   e.preventDefault();
  await  axios.post("http://localhost:3001/users",state)
       Navigate("/")
 };

  const style = {
    "marginTop": "1.5rem",
    
  };
  return (
      <>
      <form onSubmit={(e) => submitForm(e)} >
    <div className='register'>
    
   
        <input  style={style}  name='name' value = {state.name}type='text' onChange={hndlChange} placeholder='name'/>
        <input style={style}  name='email'value = {state.email} type='text' onChange={hndlChange} placeholder='email'/>
        <input  style={style} name='password'value = {state.password} type='text' onChange={hndlChange} placeholder='password'/>
        <input style={style}  name='cpassword' value = {state.cpassword}type='text' onChange={hndlChange} placeholder='cpassword'/>
        <input style={style}  name='phone'value = {state.phone} type='text' onChange={hndlChange} placeholder='phone'/>
        
      
    
  
  <button  className="btn mx-3 p-2  btn-primary  text-black"> Register </button> 
  {/* <nav className="navlink  mx-3 p-2  btn-primary  text-white" >
        <NavLink  to="/login"  >SignIn</NavLink>
    </nav> */}
    </div>
    </form>
  </>
  )
}

export default Register;