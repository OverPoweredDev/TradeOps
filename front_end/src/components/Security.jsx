import React, { Component } from 'react'
import DataCards from './DataCards';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddSecurity from './AddSecurity';
import Navbar from './Navbar';
import { useForm, SubmitHandler } from "react-hook-form"
import Button from 'react-bootstrap/esm/Button';

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
        <Navbar />
        <DataCards />
        <center><h1 className='securityh'>Securities Table</h1></center>
         {/* <div className="mr-3">
          <label htmlFor="searchName"  className="font-weight-bold">Search:    </label>
        </div>
        <input
          type="text"
          placeholder=""
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        /> */}

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
                        <td>{bond.faceValue}</td>
                        <td>{bond.status}</td>
                        <td><a href='AddSecurity'><Button type='button' className='btn btn-success' variant='contained'>Update</Button></a></td>
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