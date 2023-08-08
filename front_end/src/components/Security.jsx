import React, { Component } from 'react'
import Navbar from './Navbar'
import DataCards from './DataCards';

export default class Security extends Component {
  render() {
    return (
      <div>
        

        <div className="container mt-5">
      
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>ISIN</th>
                    <th>CUSIP</th>
                    <th>Issuer</th>
                    <th>MaturityDate</th>
                    <th>Coupon</th>
                    <th>Type</th>
                    <th>FaceValue</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>XY2344</td>
                    <td>123456789876</td>
                    <td>AB1234567</td>
                    <td>DB</td>
                    <td>10/08/2038</td>
                    <td>5</td>
                    <td>Govt. Bond</td>
                    <td>100,000</td>
                    <td>Active</td>

                </tr>

                <tr>
                <td>XY2344</td>
                    <td>123456789876</td>
                    <td>AB1234567</td>
                    <td>DB</td>
                    <td>10/08/2038</td>
                    <td>5</td>
                    <td>Govt. Bond</td>
                    <td>100,000</td>
                    <td>Active</td>
                </tr>
                <tr>
                <td>XY2344</td>
                    <td>123456789876</td>
                    <td>AB1234567</td>
                    <td>DB</td>
                    <td>10/08/2038</td>
                    <td>5</td>
                    <td>Govt. Bond</td>
                    <td>100,000</td>
                    <td>Active</td>
                    </tr>
                    <tr>
                    <td>XY2344</td>
                    <td>123456789876</td>
                    <td>AB1234567</td>
                    <td>DB</td>
                    <td>10/08/2038</td>
                    <td>5</td>
                    <td>Govt. Bond</td>
                    <td>100,000</td>
                    <td>Active</td>
                    </tr>
                    <tr>
                    <td>XY2344</td>
                    <td>123456789876</td>
                    <td>AB1234567</td>
                    <td>DB</td>
                    <td>10/08/2038</td>
                    <td>5</td>
                    <td>Govt. Bond</td>
                    <td>100,000</td>
                    <td>Active</td>
                    </tr>
                    <tr>
                    <td>XY2344</td>
                    <td>123456789876</td>
                    <td>AB1234567</td>
                    <td>DB</td>
                    <td>10/08/2038</td>
                    <td>5</td>
                    <td>Govt. Bond</td>
                    <td>100,000</td>
                    <td>Active</td>
                    </tr>
                {/* Add more rows here */}
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
