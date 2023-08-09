import React, { Component } from 'react';
import SecurityChart from './SecurityChart';

import './styles.css';
import TradeChart from './TradeChart';
import Navbar from './Navbar';
import DataCards from './DataCards';
import TradeMonthChart from './TradeMonthChart';

export default class FinalCharts extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <DataCards />
        </div>
        
        <div className="App">
          
            <TradeChart/>
            <TradeMonthChart />
            <SecurityChart />
          </div>
      </div>
    )
  }
}
