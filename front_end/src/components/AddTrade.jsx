import React from 'react';
import { useForm } from 'react-hook-form';

function AddTrade(props) {
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
            <h1>Initiate New Trade</h1>
            <form onSubmit={handleSubmit(handleLogin)}>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("ID", {required:true})} placeholder="Trade ID"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>* ID must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("CounterParty ID", {required:true})} placeholder="Counter Party ID"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*ISIN must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Security ID", {required:true})} placeholder="Security ID"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*CUSIP must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Quantity", {required:true})} placeholder="Quantity"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Issuer must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Status", {required:true})} placeholder="Status"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Maturity Date must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Price", {required:true})} placeholder="Price"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Coupon must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Buy_Sell", {required:true})} placeholder="Buy_Sell"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Type must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Trade Date", {required:true})} placeholder="Trade Date"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Face Value must be present.</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input {...register("Settlement Date", {required:true})} placeholder="Settlement Date"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {errors.email && <span style ={{color:"grey"}}>*Status must be present.</span>}
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

export default AddTrade;