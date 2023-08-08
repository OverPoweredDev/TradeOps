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

      const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name==='coupon' || 'faceValue' ? parseFloat(value) : value,
        }));

        console.log(formData);
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
            <h1>Add New Security</h1>

            <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number" placeholder="Security ID"  className="form-control"  onChange={e => handleInputChange(e)} />
               
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number"  placeholder="ISIN"  className="form-control"  onChange={handleInputChange}/>
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
                <input type="number"  placeholder="CUSIP"  className="form-control"  onChange={handleInputChange}/>
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="text" placeholder="ISSUER"  className="form-control"  onChange={handleInputChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input type="date" placeholder="MaturityDate"  className="form-control"  onChange={handleInputChange}/>
                
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number" placeholder="Coupon"  className="form-control"  onChange={handleInputChange}/>
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
                <input type="text"  placeholder="Type"  className="form-control" onChange={handleInputChange}/>
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
                <input type="number" placeholder="FaceValue"  className="form-control" onChange={handleInputChange}/>
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="text" placeholder="Status"  className="form-control" onChange={handleInputChange}/>
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