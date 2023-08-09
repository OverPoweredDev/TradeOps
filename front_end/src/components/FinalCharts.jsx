import React, { Component } from 'react';
import SecurityChart from './SecurityChart';

import './styles.css';
import TradeChart from './TradeChart';
import Navbar from './Navbar';
import DataCards from './DataCards';

export default class FinalCharts extends Component {
  render() {
    return (
      <div>


        <div className="App">
            <TradeChart/>
            <SecurityChart />
          </div>
      </div>
    )
  }
}
