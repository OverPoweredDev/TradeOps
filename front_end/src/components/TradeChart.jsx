import React, { Component, useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import { Pie } from "react-chartjs-2";

function TradeChart() {
    const [numComp, setnumcomp] = useState([]);

    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/trades/numberCompleted')
        .then(response => {
          setnumcomp(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const [numPend, setnumpend] = useState([]);

    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/trades/numberPending')
        .then(response => {
          setnumpend(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const labels = ["Pending", "Completed"];
    const data = {
    labels: labels,

    options: {
        responsive: true,
     },

    
    datasets: [
        {
        label: "My First dataset",
        backgroundColor: ["rgb(200, 200, 200)", "rgb(13, 110, 253)"],
        borderColor: "rgb(255,255,255)",
        type: 'doughnut',
        data: [numPend, numComp],
        },
    ],
    };

  return (
    <div className='card shadow-2-strong'>
        <div className='card-body'>
            <center><p class="text-uppercase mb-2"><strong>Trade Status</strong></p></center>
            <Pie data={data} />
        </div>
    </div>
  );
};
export default TradeChart;