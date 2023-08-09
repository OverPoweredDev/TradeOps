import React, { Component } from 'react';

import tradeimg from './images/tradeimg.png';
import securityimg from './images/securityimg.png';
import bondimg from './images/bondimg.png'
import axios from 'axios';
import { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function DataCards(props) {
    const [bondData, setBond] = useState([]);
    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/get')
        .then(response => {
          setBond(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const [trades, setTrades] = useState([]);
    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/trades/get')
        .then(response => {
          setTrades(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const date = new Date();

    let currentDay= String(date.getDate()).padStart(2, '0');

    let currentMonth = String(date.getMonth()+1).padStart(2,"0");

    let currentYear = date.getFullYear();

    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    console.log(currentDate)

    const [bondPast, setBondpast] = useState([]);
    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/pastMaturity?date='+currentDate)
        .then(response => {
          setBondpast(response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
        return (
            <div className='navbar data'>
            <div className='row row-cols-1 row-cols-md-3 g-4 bg-primary d-flex justify-content-around'>
                <div className="col-sm w-25 p-3">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <div className="row">
                                <div className='col'>
                                    <h4 className='card-title '>Total Trades</h4>
                                    <p className="card-text">{trades.length}</p>
                                </div>
                                <div className='col'>
                                    <img className="card-img-right img-fluid w-60" src={tradeimg} alt="Card image cap" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm w-25 p-3">
                    <div className="card h-100">
                        <div className="card-body text-center">
                        <div className="row d-flex justify-content-around">
                                <div className='col'>
                                    <h4 className='card-title '>Total Securites</h4>
                                    <p className="card-text">{bondData.length}</p>
                                </div>
                                <div className='col w-50'>
                                    <img className="card-img-right img-fluid w-60" src={securityimg} alt="Card image cap"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm w-25 p-3">
                    <div className="card h-100">
                        <div className="card-body text-center">
                        <div className="row d-flex justify-content-around">
                                <div className='col w-50'>
                                    <h4 className='card-title'>Post Matured Bonds</h4>
                                    <p className="card-text">{bondPast}</p>
                                </div>
                                <div className='col w-50'>
                                    <img className="card-img-right img-fluid w-60" src={bondimg} alt="Card image cap"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            
        );
    }

export default DataCards;