import React, { Component } from 'react'
import Navbar from './Navbar'
import DataCards from './DataCards';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
                      </tr>
                    ))
                    }

                {/* <tr>
                    <td>XY2344</td>
                    <td>123456789876</td>
                    <td>AB1234567</td>
                    <td>DB</td>
                    <td>10/08/2038</td>
                    <td>5</td>
                    <td>Govt. Bond</td>
                    <td>100,000</td>
                    <td>Active</td>

                </tr>

                <tr>
                <td>XY2344</td>
                    <td>123456789876</td>
                    <td>AB1234567</td>
                    <td>DB</td>
                    <td>10/08/2038</td>
                    <td>5</td>
                    <td>Govt. Bond</td>
                    <td>100,000</td>
                    <td>Active</td>
                </tr>
                <tr>
                <td>XY2344</td>
                    <td>123456789876</td>
                    <td>AB1234567</td>
                    <td>DB</td>
                    <td>10/08/2038</td>
                    <td>5</td>
                    <td>Govt. Bond</td>
                    <td>100,000</td>
                    <td>Active</td>
                    </tr>
                    <tr>
                    <td>XY2344</td>
                    <td>123456789876</td>
                    <td>AB1234567</td>
                    <td>DB</td>
                    <td>10/08/2038</td>
                    <td>5</td>
                    <td>Govt. Bond</td>
                    <td>100,000</td>
                    <td>Active</td>
                    </tr>
                    <tr>
                    <td>XY2344</td>
                    <td>123456789876</td>
                    <td>AB1234567</td>
                    <td>DB</td>
                    <td>10/08/2038</td>
                    <td>5</td>
                    <td>Govt. Bond</td>
                    <td>100,000</td>
                    <td>Active</td>
                    </tr>
                    <tr>
                    <td>XY2344</td>
                    <td>123456789876</td>
                    <td>AB1234567</td>
                    <td>DB</td>
                    <td>10/08/2038</td>
                    <td>5</td>
                    <td>Govt. Bond</td>
                    <td>100,000</td>
                    <td>Active</td>
                    </tr> */}
                {/* Add more rows here */}
                </tbody>
            </table>
        </div>
      </div>
    )
  }

  export default Security