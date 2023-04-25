import React from 'react'
import Chart from 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';
import './css/ProfilePieChart.css'

const ProfilePieChart = (props) => {
  const {bg_color, label, value} = props;
  const chart_data = {
    labels: [label],
    datasets: [
      {
        label: label,
        backgroundColor: [
          bg_color,"whitesmoke"
        ],
        data: [value, 100-value]
      }
    ],

  }
  
  return (
        <>
            <Doughnut data={chart_data} className='chart-size' options={{
              plugins:{
                legend: false,
              }
            }} />
            <div id="chart-detail">
                <h6>{label}</h6>
                <p>{value*100}/10,000</p>
                <p>{value}%</p>
            </div>
        </>
        
  )
}

export default ProfilePieChart