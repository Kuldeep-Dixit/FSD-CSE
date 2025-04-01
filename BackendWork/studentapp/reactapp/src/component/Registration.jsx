import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Registration(){

    function sendData(e){
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        alert(name+email+password);

        fetch("http://localhost:3005/register",{
            method:"POST",
            body:{},
            headers:{'Content-Type':'application/json'}
        })
    }

    return (
        <>
        <div>
            <h2 style={{backgroundColor:"cyan"}}>Registration</h2>
            <form onSubmit={sendData}>
            <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" name="name" class="form-control" id="exampleInputName" aria-describedby="namelHelp" placeholder="Enter Name"/>
                    <small id="nameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name ="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    );
}

export default Registration;