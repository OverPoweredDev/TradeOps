import React from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';

function AddSecurity(props) {
    const {register, handleSubmit, watch, formState: {errors}, } = useForm();
    const handleLogin = (data) => {
        console.log('form is submitted')
        console.log(data)

        axios({
            url: "http://localhost:8080/securities/add",
            method: "POST",
            data: data,
        }).then((res) => console.log(res)).catch((err) => console.log(err))
    }
    return (
        <div className="container-fluid">
        <div className='row login-main'>
        <div className='col-2'></div>
        

        <div className='col-4'>
            <h1>Add New Security</h1>
            <form>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number" {...register("ID", {required:true})} placeholder="Security ID"  className="form-control" />
               
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number" {...register("ISIN", {required:true})} placeholder="ISIN"  className="form-control" />
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
                <input type="number" {...register("CUSIP", {required:true})} placeholder="CUSIP"  className="form-control"/>
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="text" {...register("ISSUER", {required:true})} placeholder="ISSUER"  className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input type="date" {...register("MATURITYDATE")} placeholder="MaturityDate"  className="form-control" />
                
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number" {...register("COUPON", {required:true})} placeholder="Coupon"  className="form-control" />
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
                <input type="text"  {...register("TYPE", {required:true})} placeholder="Type"  className="form-control" />
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
                <input type="number" {...register("FACEVALUE", {required:true})} placeholder="FaceValue"  className="form-control" />
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="text"  {...register("STATUS", {required:true})} placeholder="Status"  className="form-control" />
            </div>

            <div class="d-grid gap-2">
            
            <button type="submit" class="btn btn-primary login-btn">Add</button>
            </div>
            </form>
            </div>   
        </div>
        </div>
    );
}

export default AddSecurity;