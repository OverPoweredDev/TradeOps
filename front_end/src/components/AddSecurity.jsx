import React, {useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';

function AddSecurity(props) {
    // const {register, handleSubmit, watch, formState: {errors}, } = useForm();
    // const handleLogin = (data) => {
    //     console.log('form is submitted')
    //     console.log(data)

    //     axios({
    //         url: "http://localhost:8080/securities/add",
    //         method: "POST",
    //         data: data,
    //     }).then((res) => console.log(res)).catch((err) => console.log(err))
    // }
    const [formData, setFormData] = useState({
        securityId: 0,
        isin: 0,
        cusip: 0,
        issuer: '',
        maturityDate: '',
        coupon: 0.0,
        securityType: '',
        faceValue: 0.0,
        status: ''
      });
    const {securityId, isin, cusip, issuer, maturityDate, coupon, securityType, faceValue, status} = formData;
      const handleInputChange = (name) => (e) =>{
        setFormData({...formData, [name]:e.target.value  })
        //const {name, value} = e.target;

        // setFormData((prevData) => ({
        //     ...prevData,
        //     [name]:value,
        // }));

        // console.log(formData);
      };

    //   useEffect(() => {
        
    //   },[formData]);

      const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const resp = await axios.post('http://localhost:8080/securities/add',formData);
            console.log('Data Added successfully: ',resp.data);
        }

        catch (err){
            console.log(err);
        }
    };
    return (
        <div className="container-fluid">
        <div className='row login-main'>
        <div className='col-2'></div>
        

        <div className='col-4'>
            <h1>Add/Update Security</h1>

            <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number" placeholder="Security ID"  className="form-control" value={securityId}  onChange={handleInputChange("securityId")} />
               
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number"  placeholder="ISIN"  className="form-control" value={isin}  onChange={handleInputChange("isin")}/>
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
                <input type="number"  placeholder="CUSIP"  className="form-control" value={cusip}  onChange={handleInputChange("cusip")}/>
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="text" placeholder="ISSUER"  className="form-control" value={issuer} onChange={handleInputChange("issuer")}/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input type="date" placeholder="MaturityDate"  className="form-control" value={maturityDate}  onChange={handleInputChange("maturityDate")}/>
                
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number" placeholder="Coupon"  className="form-control" value={coupon}  onChange={handleInputChange("coupon")}/>
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
                <input type="text"  placeholder="Type"  className="form-control" value={securityType} onChange={handleInputChange("securityType")}/>
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
                <input type="number" placeholder="FaceValue"  className="form-control" value={faceValue} onChange={handleInputChange("faceValue")}/>
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="text" placeholder="Status"  className="form-control" value={status} onChange={handleInputChange("status")}/>
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