import React, { Component } from 'react'
import DataCards from './DataCards';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddSecurity from './AddSecurity';

import { useForm, SubmitHandler } from "react-hook-form"
import Button from 'react-bootstrap/esm/Button';

function updateSecurity(id){
  axios({
    url: "http://localhost:8080/update/",
    method: "POST"
  })
  .then((res) => { console.log("http://localhost:8080/delete/" + id) })
  .catch((err) => { console.log("http://localhost:8080/delete/" + id) });
}

function Security(props) {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [bondData, setBond] = useState([]);
    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/get')
        .then(response => {
          setBond(response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    return (
      <div>
        
      <div className="container mt-3 d-flex justify-content-end"> {/* Shift search bar to the right */}
         <div className="mr-3">
          <label htmlFor="searchName"  className="font-weight-bold">Search:    </label>
        </div>
        <input
          type="text"
          placeholder=""
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
        <div className="container mt-5">

            <a href="/AddSecurity">
                <button className='btn btn-primary m-3'>Add New Security</button>
            </a>
            
            {/* <table className="table table-bordered"> */}
      
            <table className="table table-bordered table-success table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>ISIN</th>
                    <th>CUSIP</th>
                    <th>Issuer</th>
                    <th>MaturityDate</th>
                    <th>Coupon</th>
                    <th>Type</th>
                    <th>FaceValue</th>
                    <th>Status</th>
                    <th>Update</th>
                </tr>
                </thead>
                <tbody>
                  {
                    bondData.map(bond => (
                      <tr key={bond.securityId}>
                        <td>{bond.securityId}</td>
                        <td>{bond.isin}</td>
                        <td>{bond.cusip}</td>
                        <td>{bond.issuer}</td>
                        <td>{bond.maturityDate}</td>
                        <td>{bond.coupon}</td>
                        <td>{bond.type}</td>
                        <td>{bond.faceValue}</td>
                        <td>{bond.status}</td>
                        <td><Button type='button' className='btn btn-success' variant='contained' onClick={updateSecurity(bond.securityId)}>Update</Button></td>
                      </tr>
                    ))
                    }

                </tbody>
            </table>
        </div>
      </div>
    )
  }

  export default Security