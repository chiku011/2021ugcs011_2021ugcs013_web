import React,{useState} from 'react'
import { Await, Link,useNavigate } from 'react-router-dom'
export default function Login() {
  const [credentials,setcredentials]=useState({email:"",password:""})
let navigate=useNavigate()
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response= await fetch("http://localhost:5000/api/loginuser",{
            method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const json=await response.json()
        console.log(json)
        if(!json.success){
          alert("enter valid credential")
        }
        if(json.success){
          localStorage.setItem("userEmail",credentials.email);
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authToken"))
          navigate("/");
        }
        
    }
    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <div>
      <div className='container'>

    
<form onSubmit={handleSubmit}>


<div className="form-group">
<label htmlFor="exampleInputEmail1">Email address</label>
<input type="email" className="form-control" name='email'value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div className="form-group">
<label htmlFor="exampleInputPassword1">Password</label>
<input type="password" className="form-control" name='password'value={credentials.password} onChange={onChange} id="exampleInputPassword1" placeholder="Password"/>
</div>

<button type="submit" className="btn btn-primary">Submit</button>
<Link to="/creatuser" className='m-3 btn btn-danger'>I am a new user</Link>
</form>
</div>
    </div>
  )
}
