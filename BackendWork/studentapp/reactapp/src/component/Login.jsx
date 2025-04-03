import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    async function sendData(e){
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const response = fetch("http://localhost:3005/login",{
            method:"POST",
            body:JSON.stringify({email,password}),
            header:{'Content-Type' : 'application/json'}
        })
        const res = await response.json();
        alert(response.msg);

        if(res.msg=='success'){
            navigate('/Dashboard')
        }

    }


    return (
        <>
            <div style={{border:'2px dotted black', padding:'10px', BorderRadiusTopleft:'10px'}}>
                <h2 style={{backgroundColor:"cyan"}}>Login</h2>
                <form onSubmit={sendData}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );

}
    

export default Login;