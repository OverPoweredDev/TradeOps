import React from 'react';
import { useForm } from "react-hook-form";



function Login(props) {
    const {register, handleSubmit, watch, formState: {errors}, } = useForm();
    const handleLogin = (data) => {
        console.log('form is submitted')
        console.log(data)
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
                <input {...register("email", {required:true})} placeholder="Email Address" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Email field cannot be empty.</span>}
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