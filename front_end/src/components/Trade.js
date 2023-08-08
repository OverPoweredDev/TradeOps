import React, { Component } from 'react';
import DataCards from './DataCards';
import Navbar from './Navbar';

class Trade extends Component {
  render() {
    return (
      <div>

        <div>
            <Navbar />
        </div>

        <div>
            <DataCards/>
        </div>

      
      <div className="container mt-5">
      
        <table className="table table-bordered">
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
            <tr>
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
            {/* Add more rows here */}
          </tbody>
        </table>
      </div>

      </div>
    );
  }
}

export default Trade;