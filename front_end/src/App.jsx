import React, { Component } from 'react'
import Navbar from './components/Navbar';

import './App.css';

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import DataCards from './components/DataCards';
import Trade from './components/Trade';
import Security from './components/Security';
import TradeChart from './components/TradeChart';
import SecurityChart from './components/SecurityChart';
import FinalCharts from './components/FinalCharts';



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
            <Route path='/' element={<FinalCharts/>}/>
            <Route path="/usertrades" element={<Trade />}/>
            <Route path='/security' element={<Security />}/>
          </Routes>
        </div>
      </div>
    )
  }
}

