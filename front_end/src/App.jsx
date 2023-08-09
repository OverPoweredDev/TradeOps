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
import AddSecurity from './components/AddSecurity';
import AddTrade from './components/AddTrade';
import UpdateSecurity from './components/UpdateSecurity';
import Login from './components/Login';



export default class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar />

        <DataCards/>



        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Dashboard' element={<FinalCharts/>}/>
            <Route path='/AddSecurity' element={<AddSecurity/>}/>
            <Route path='/AddTrade' element={<AddTrade/>}/>
            <Route path="/usertrades" element={<Trade />}/>
            <Route path='/security' element={<Security />}/>
            <Route path='/updateSecurity' element={<UpdateSecurity/>}/>
          </Routes>
        </div>
      </div>
    )
  }
}

