import React, { Component } from 'react';
import SecurityChart from './SecurityChart';

import './styles.css';
import TradeChart from './TradeChart';

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
