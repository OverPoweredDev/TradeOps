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
    // const [formData, setFormData] = useState({
    //     securityId: 0,
    //     isin: 0,
    //     cusip: 0,
    //     issuer: '',
    //     maturityDate: '',
    //     coupon: 0.0,
    //     securityType: '',
    //     faceValue: 0.0,
    //     status: ''
    //   });

      const [securityId,setSecurityId]=useState(0);
      const [isin,setIsin]=useState(0);
      const [cusip,setCusip]=useState(0);
      const [issuer,setIssuer]=useState('');
      const [maturityDate,setMaturityDate]=useState('');
      const [coupon,setCoupon]=useState(0.0);
      const [securityType,setSecurityType]=useState('');
      const [faceValue,setFaceValue]=useState(0.0);
      const [status,setStatus]=useState('');


    //   const handleInputChange = (e) => {

        
    //     const {name, value} = e.target;

    //     // setFormData((prevData) => ({
    //     //     ...prevData,
    //     //     [name]: name==='coupon' || 'faceValue' ? parseFloat(value) : value,
    //     // }));

    //     // console.log(formData);

    //     if(name==='securityId'){
    //         setSecurityId(parseInt(value,10))

    //         console.log(securityId);
    //     }

    //     else if(name==='isin'){
    //         setIsin(parseInt(value,10))
    //     }

    //     else if(name==='cusip'){
    //         setCusip(parseInt(value,10))
    //     }

    //     else if(name==='issuer'){
    //         setIssuer(value)
    //     }

    //     else if(name==='maturityDate'){
    //         setMaturityDate(value)
    //     }

    //     else if(name==='coupon'){
    //         setCoupon(parseFloat(value))
    //     }

    //     else if(name==='securityType'){
    //         setSecurityType(value)
    //     }

    //     else if(name==='faceValue'){
    //         setFaceValue(parseFloat(value))
    //     }

    //     else if(name==='status'){
    //         setStatus(value)
    //     }
        
    //   };

    //   useEffect(() => {
        
    //   },[formData]);

    const handleID = (e) => {
        setSecurityId((prevData) => ({
            ...prevData,
            [e.target.name]: parseInt(e.target.value),
        }));


      };

      const handleIsin = (e) => {
        setIsin((prevData) => ({
            ...prevData,
            [e.target.name]: parseInt(e.target.value),
        }));
      };

      const handleCusip = (e) => {
        setCusip((prevData) => ({
            ...prevData,
            [e.target.name]: parseInt(e.target.value),
        }));
      };

      const handleIssuer = (e) => {
        setIssuer((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
      };

      const handleMaturityData = (e) => {
        setMaturityDate((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
      };

      const handleCoupon = (e) => {
        setCoupon((prevData) => ({
            ...prevData,
            [e.target.name]: parseFloat(e.target.value),
        }));
      };

      const handleType = (e) => {
        setSecurityType((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
      };

      const handleFaceValue = (e) => {
        setFaceValue((prevData) => ({
            ...prevData,
            [e.target.name]: parseFloat(e.target.value),
        }));
      };

      const handleStatus = (e) => {
        setStatus((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const resp = await axios.post('http://localhost:8080/securities/add',{
                securityId,
                isin,
                cusip,
                issuer,
                maturityDate,
                coupon,
                securityType,
                faceValue,
                status
            });
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
                <input type="number" name='securityId' placeholder="Security ID"  className="form-control" value={securityId} onChange={handleID} />
               
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number" name='isin'  placeholder="ISIN"  className="form-control"  onChange={handleIsin}/>
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
                <input type="number"name='cusip'  placeholder="CUSIP"  className="form-control"  onChange={handleCusip}/>
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="text" name='issuer' placeholder="ISSUER"  className="form-control"  onChange={handleIssuer}/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input type="date" name='maturityDate' placeholder="MaturityDate"  className="form-control"  onChange={handleMaturityData}/>
                
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="number"name='coupon' placeholder="Coupon"  className="form-control"  onChange={handleCoupon}/>
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
                <input type="text" name='type'  placeholder="Type"  className="form-control" onChange={handleType}/>
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
                <input type="number" name='faceValue' placeholder="FaceValue"  className="form-control" onChange={handleFaceValue}/>
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
                <input type="text" name='status' placeholder="Status"  className="form-control" onChange={handleStatus}/>
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