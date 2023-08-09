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
<<<<<<< HEAD
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
=======
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
>>>>>>> d85a863d911239cc04c45582dc483ad2c9b086bf

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
<<<<<<< HEAD
                <input type="number" name='securityId' placeholder="Security ID"  className="form-control" value={securityId} onChange={handleID} />
=======
                <input type="number" placeholder="Security ID"  className="form-control" value={securityId}  onChange={handleInputChange("securityId")} />
>>>>>>> d85a863d911239cc04c45582dc483ad2c9b086bf
               
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
<<<<<<< HEAD
                <input type="number" name='isin'  placeholder="ISIN"  className="form-control"  onChange={handleIsin}/>
=======
                <input type="number"  placeholder="ISIN"  className="form-control" value={isin}  onChange={handleInputChange("isin")}/>
>>>>>>> d85a863d911239cc04c45582dc483ad2c9b086bf
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
<<<<<<< HEAD
                <input type="number"name='cusip'  placeholder="CUSIP"  className="form-control"  onChange={handleCusip}/>
=======
                <input type="number"  placeholder="CUSIP"  className="form-control" value={cusip}  onChange={handleInputChange("cusip")}/>
>>>>>>> d85a863d911239cc04c45582dc483ad2c9b086bf
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
<<<<<<< HEAD
                <input type="text" name='issuer' placeholder="ISSUER"  className="form-control"  onChange={handleIssuer}/>
=======
                <input type="text" placeholder="ISSUER"  className="form-control" value={issuer} onChange={handleInputChange("issuer")}/>
>>>>>>> d85a863d911239cc04c45582dc483ad2c9b086bf
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
<<<<<<< HEAD
                <input type="date" name='maturityDate' placeholder="MaturityDate"  className="form-control"  onChange={handleMaturityData}/>
=======
                <input type="date" placeholder="MaturityDate"  className="form-control" value={maturityDate}  onChange={handleInputChange("maturityDate")}/>
>>>>>>> d85a863d911239cc04c45582dc483ad2c9b086bf
                
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
<<<<<<< HEAD
                <input type="number"name='coupon' placeholder="Coupon"  className="form-control"  onChange={handleCoupon}/>
=======
                <input type="number" placeholder="Coupon"  className="form-control" value={coupon}  onChange={handleInputChange("coupon")}/>
>>>>>>> d85a863d911239cc04c45582dc483ad2c9b086bf
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
<<<<<<< HEAD
                <input type="text" name='type'  placeholder="Type"  className="form-control" onChange={handleType}/>
=======
                <input type="text"  placeholder="Type"  className="form-control" value={securityType} onChange={handleInputChange("securityType")}/>
>>>>>>> d85a863d911239cc04c45582dc483ad2c9b086bf
            </div>

            <div className="mb-3">
                <label className="form-label"></label>
<<<<<<< HEAD
                <input type="number" name='faceValue' placeholder="FaceValue"  className="form-control" onChange={handleFaceValue}/>
=======
                <input type="number" placeholder="FaceValue"  className="form-control" value={faceValue} onChange={handleInputChange("faceValue")}/>
>>>>>>> d85a863d911239cc04c45582dc483ad2c9b086bf
            </div>

            <div className="mb-3">
                <label  className="form-label"></label>
<<<<<<< HEAD
                <input type="text" name='status' placeholder="Status"  className="form-control" onChange={handleStatus}/>
=======
                <input type="text" placeholder="Status"  className="form-control" value={status} onChange={handleInputChange("status")}/>
>>>>>>> d85a863d911239cc04c45582dc483ad2c9b086bf
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