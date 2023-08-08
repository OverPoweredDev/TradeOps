import React, { Component } from 'react'
import Navbar from './components/Navbar';

import {Routes,Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import DataCards from './components/DataCards';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="cards">
          <DataCards/>
        </div>

        <div className='container mt-3'>
          <Routes>
            {/* <Route path='/home' /> */}
            <Route path='/report' />
            <Route path='/userTrade' />
            <Route path='security' />
            
          </Routes>
        </div>
      </div>
    )
  }
}

