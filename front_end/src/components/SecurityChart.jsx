import React, { Component, useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import axios from 'axios';

const SecurityChart = () => {
    const [numSec, setnumsec] = useState([]);

    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/numberSecurities')
        .then(response => {
          setnumsec(response.data)
          console.log("number securities")
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const [numPast, setnumpast] = useState([]);
    const date = new Date();

    let currentDay= String(date.getDate()).padStart(2, '0');

    let currentMonth = String(date.getMonth()+1).padStart(2,"0");

    let currentYear = date.getFullYear();

    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/pastMaturity?date='+currentDate)
        .then(response => {
          setnumpast(response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);


    const [numAbout, setnumabout] = useState([]);

    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/aboutToMature?date=' + currentDate + '&alertWindow=7')
        .then(response => {
          setnumabout(response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const labels = ["Immature", "Matured", "About to mature"];
    const data = {
    labels: labels,

    options: {
        responsive: true,
     },

    
    datasets: [
        {
        label: "My First dataset",
        backgroundColor: ["rgb(40, 50, 100)", 'rgb(13, 110, 253)', 'rgb(200, 200, 200)'],
        borderColor: "rgb(255,255,255)",
        type: 'doughnut',
        data: [numSec-numPast-numAbout, numPast, numAbout],
        },
    ],
    };

  return (
    <div className='card shadow-2-strong'>
        <div className='card-body'>
            <center><p class="text-uppercase mb-2"><strong>Security Status</strong></p></center>
            <Pie data={data} />
        </div>
    </div>
  );
};
export default SecurityChart;

// class SecurityChart extends Component {
//     constructor() {
//         super();
//         this.state = {
//             iFrameHeight: '0px',
//             iFrameWidth: '0px'
//         }
//     }

//   render() {
//     return (
//         <iframe 
//         style={{maxWidth:640, width:this.state.iFrameWidth, height:this.state.iFrameHeight, overflow:'visible'}}
//         onLoad={() => {
//             const obj = ReactDOM.findDOMNode(this);
//             this.setState({
//                 "iFrameHeight":  obj.contentWindow.document.body.scrollHeight + 'px',
//                 "iFrameWidth":  obj.contentWindow.document.body.scrollWidth + 'px'
//             });
//         }} 
//         ref="iframe" 
//         src="securityChart.html" 
//         width={this.state.iFrameWidth} 
//         height={this.state.iFrameHeight} 
//         scrolling="no" 
//         frameBorder="0"
//     />
//     )
//   }
// }

// export default SecurityChart;