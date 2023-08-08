import React from 'react';
import { useForm } from 'react-hook-form';

function AddSecurity(props) {
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
            <h1>Add New Security</h1>
            <form onSubmit={handleSubmit(handleLogin)}>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("ID", {required:true})} placeholder="Security ID"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Security ID must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("ISIN", {required:true})} placeholder="ISIN"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*ISIN must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("CUSIP", {required:true})} placeholder="CUSIP"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*CUSIP must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Issuer", {required:true})} placeholder="Issuer"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Issuer must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Maturity Date", {required:true})} placeholder="Maturity Date"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Maturity Date must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Coupon", {required:true})} placeholder="Coupon"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Coupon must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Type", {required:true})} placeholder="Type"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Type must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Face Value", {required:true})} placeholder="Face Value"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Face Value must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Status", {required:true})} placeholder="Status"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Status must be present.</span>}
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

export default AddSecurity;