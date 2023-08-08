import React, { Component } from 'react';
import DataCards from './DataCards';
import Navbar from './Navbar';
import axios from "axios";
import { useState, useEffect } from 'react';

function Trade(props) {
    const [trades, setTrades] = useState([]);
     const [records, setRecords] = useState(trades); 
  
     

    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/trades/get')
        .then(response => {
          setTrades(response.data)
          setRecords(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
    const Filter = (event)=> {
      setRecords(trades.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }
    return (
      <div>
          <div className="container mt-3 d-flex justify-content-end"> {/* Shift search bar to the right */}
         <div className="mr-3" id="search-icon">
          <label htmlFor="searchName"  className="font-weight-bold">Search:    </label>
        </div>
        <input
          type="text"
          placeholder=""
          className='form-control'
          
          onChange={Filter}
        />
      </div>
    
      <div className="container mt-5">
        
      
        <table className="table table-bordered table-success table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>BookId</th>
              <th>CounterPartyId</th>
              <th>SecurityId</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Price</th>
              <th>Buy_Sell</th>
              <th>TradeDate</th>
              <th>SettlementDate</th>
            </tr>
          </thead>
          <tbody>
            {
              trades.map(trade => (
                <tr key={trade.id}>
                  <td>{trade.id}</td>
                  <td>{trade.bookId}</td>
                  <td>{trade.counterpartyId}</td>
                  <td>{trade.securityId}</td>
                  <td>{trade.quantity}</td>
                  <td>{trade.status}</td>
                  <td>{trade.price}</td>
                  <td>{trade.buySell}</td>
                  <td>{trade.tradeDate}</td>
                  <td>{trade.settlementDate}</td>

                </tr>
              ))
            }
            {/* <tr>
              <td>1</td>
              <td>25</td>
              <td>111907034</td>
              <td>XY2344</td>
              <td>1</td>
              <td></td>
              <td>John Doe</td>
              <td>25</td>
              <td>New York</td>
              <td>New York</td>

            </tr>

            <tr>
              <td>2</td>
              <td>25</td>
              <td>New York</td>
              <td>John Doe</td>
              <td>25</td>
              <td>New York</td>
              <td>John Doe</td>
              <td>25</td>
              <td>New York</td>
              <td>New York</td>
            </tr>
            <tr>
            <td>3</td>
              <td>25</td>
              <td>New York</td>
              <td>John Doe</td>
              <td>25</td>
              <td>New York</td>
              <td>John Doe</td>
              <td>25</td>
              <td>New York</td>
              <td>New York</td>
              </tr>
              <tr>
                <td>4</td>
                <td>25</td>
              <td>New York</td>
              <td>John Doe</td>
              <td>25</td>
              <td>New York</td>
              <td>John Doe</td>
              <td>25</td>
              <td>New York</td>
              <td>New York</td>
              </tr>
              <tr>
                <td>5</td>
                <td>25</td>
              <td>New York</td>
              <td>John Doe</td>
              <td>25</td>
              <td>New York</td>
              <td>John Doe</td>
              <td>25</td>
              <td>New York</td>
              <td>New York</td>
              </tr>
              <tr>
                <td>5</td>
                <td>25</td>
              <td>New York</td>
              <td>John Doe</td>
              <td>25</td>
              <td>New York</td>
              <td>John Doe</td>
              <td>25</td>
              <td>New York</td>
              <td>New York</td>
              </tr> 
             */}
          </tbody>
        </table>
      </div>

      </div>
    );
  }

export default Trade;