import React, { useState } from 'react'

function Registration({regData}) {
  const[userName,setUserName]=useState();
  const[password,setPassword]=useState();
  const[email,setEmail]=useState();
  const[userdata,setuserdata]=useState();


  function showData(e)
  { e.preventDefault();
    // alert("Name"+" "+userName);
    // alert("email:"+" "+email)
    // alert("password:"+" "+password)
    const data={
      userName,
      email,
      password
    }
    regData(data);

    // setuserdata(data)

  }
  return (
    <div>
      <div>{JSON.stringify(userdata)}</div>
      <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input onChange={(e)=>setUserName(e.target.value)}  type="text"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    {/* <div>{email}</div> */}
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input onChange={(e)=>setEmail(e.target.value)}  type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    {/* <div>{password}</div>  */}
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary" onClick={showData}>Register</button>
  </form></div>
  )
}

export default Registration