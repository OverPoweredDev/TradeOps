import React, { Component, useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import { Line } from "react-chartjs-2";

function TradeMonthChart() {
    const [dec, setDec] = useState([]);

    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/get?startDate=2023-07-01&endDate=2023-07-31')
        .then(response => {
          setDec(response.data.length)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const [jan, setJan] = useState([]);

    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/get?startDate=2023-07-01&endDate=2023-07-31')
        .then(response => {
          setJan(response.data.length)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const [feb, setFeb] = useState([]);

    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/get?startDate=2023-08-01&endDate=2023-08-31')
        .then(response => {
          setFeb(response.data.length)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const [mar, setMar] = useState([]);

    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/get?startDate=2023-09-01&endDate=2023-09-31')
        .then(response => {
          setMar(response.data.length)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const [apr, setApr] = useState([]);

    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/get?startDate=2023-10-01&endDate=2023-10-31')
        .then(response => {
          setApr(response.data.length)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const [may, setMay] = useState([]);

    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/get?startDate=2023-11-01&endDate=2023-11-31')
        .then(response => {
          setMay(response.data.length)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const [jun, setJun] = useState([]);

    useEffect(() => {
      // Make an API call to fetch data
      axios.get('http://localhost:8080/securities/get?startDate=2023-12-01&endDate=2023-12-31')
        .then(response => {
          setJun(response.data.length)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    const labels = ["July", "August", "September", "October", "November", "December"];
    const data = {
    labels: labels,

    options : {
        responsive:true,
        scales : {

            y: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: '# of securities'
                  }
                  }]
              }
        },

    
    datasets: [
        {
        label: "# of securities maturing this month",
        type: 'line',
        data: [jan, feb, mar, apr, may, jun],
        borderColor : "rgb(13, 110, 253)"
        },
    ],
    };

  return (
    <div className='card shadow-2-strong col-6'>
        <div className='card-body'>
            <center><p class="text-uppercase mb-2"><strong>Security Maturity</strong></p></center>
            <Line data={data} />
        </div>
    </div>
  );
};
export default TradeMonthChart;