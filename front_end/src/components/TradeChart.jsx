import React, { Component, useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import { Pie } from "react-chartjs-2";

function TradeChart() {
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
        backgroundColor: ['red', 'aqua', 'pink'],
        borderColor: "rgb(0,0,255)",
        type: 'doughnut',
        data: [numSec-numPast-numAbout, numPast, numAbout],
        },
    ],
    };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export default TradeChart;