import React, { Component } from 'react'
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import DataCards from './components/DataCards';
import Trade from './components/Trade';
import Security from './components/Security';



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div>
          <DataCards/>
        </div>
      
        <div className='container mt-3'>
          <Routes>
            {/* <Route path='/home' /> */}
            <Route path="/usertrades" element={<Trade />}/>
            <Route path='/security' element={<Security />}/>
          </Routes>
        </div>
      </div>
    )
  }
}

