import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';


function Login(props) {
    const {register, handleSubmit, watch, formState: {errors}, } = useForm();
    const handleLogin = async (data) => {
        console.log(data)
        axios.post('http://localhost:8080/app/login', {
            'username': data.username,
            'password': data.password
          })
          .then((response) => {
            if(response.data){
                window.location.replace("http://localhost:3000/dashboard")
            }else{
                alert("Try Again\nEmail or Password incorrect")
            };
          }, (error) => {
            console.log(error);
          });
    }

    return (
        <div className="container-fluid">
        <div className='row login-main'>
        <div className='col-2'></div>
        <div className='col-4'>
            <img height={'40%'} src='https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg' />
        </div>

        <div className='col-4'>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(handleLogin)}>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("username", {required:true})} placeholder="Username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Username field cannot be empty.</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label"></label>
                <input {...register("password", {required:true})} placeholder='Password' type="password" className="form-control" id="exampleInputPassword1"/>
                {errors.password && <span style ={{color:"grey"}}>*Password field cannot be empty.</span>}
            </div>
            <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary login-btn">Login</button>
            </div>
            </form>
            </div>   
        </div>
        </div>
    );
}

export default Login;