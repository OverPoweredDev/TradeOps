import React, { Component } from 'react';

import tradeimg from './images/tradeimg.png';
import securityimg from './images/securityimg.png';
import bondimg from './images/bondimg.png'

class DataCards extends Component {
    render() {
        return (
            <div>
            <div className='card-deck row row-cols-1 row-cols-md-3 g-4 bg-primary d-flex justify-content-around'>
                <div className="col w-25 p-3">
                    <div className="card ">
                        <div className="card-body text-center">
                            <div className="row">
                                <div className='col'>
                                    <h4 className='card-title '>Total Trades</h4>
                                    <p class="card-text">display total trades</p>
                                </div>
                                <div className='col'>
                                    <img class="card-img-right img-fluid w-25" src={tradeimg} alt="Card image cap" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col w-25 p-3">
                    <div className="card ">
                        <div className="card-body text-center">
                        <div className="row d-flex justify-content-around">
                                <div className='col'>
                                    <h4 className='card-title '>Total Securites</h4>
                                    <p class="card-text">display total securities</p>
                                </div>
                                <div className='col w-50'>
                                    <img class="card-img-right img-fluid w-25" src={securityimg} alt="Card image cap"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col w-25 p-3">
                    <div className="card ">
                        <div className="card-body text-center">
                        <div className="row d-flex justify-content-around">
                                <div className='col w-50'>
                                    <h4 className='card-title '>Post Matured Bonds</h4>
                                    <p class="card-text">display bonds</p>
                                </div>
                                <div className='col w-50'>
                                    <img class="card-img-right img-fluid w-25" src={bondimg} alt="Card image cap"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            
        );
    }
}

export default DataCards;