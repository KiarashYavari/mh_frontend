import React from 'react'
import { Bar } from 'react-chartjs-2';

const ProfileBarChart = () => {
  const chart_data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18",
         "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: "Searches",
        backgroundColor: 
          ["blue",],
        borderWidth: 1,
        borderColor: "blue",
        data: [10, 7, 8, 6, 5, 3, 2, 4, 6, 9, 3, 1, 10, 7, 8, 6, 5, 3, 2, 4, 
            6, 9, 3, 1, 5, 6, 4, 2, 3, 7]
      }
    ],

  }
  
  return (
        <>
            <Bar data={chart_data} id="profile-bar-canvas" options={{
                plugins: {
                  title: {
                    display: true,
                    text: "Daily Usage",
                    align: "start",
                    padding: {
                      top: 10,
                      bottom: 30,
                    },
                    font: {
                      size: 20,
                      color:"black",
                    }
                  },
                  legend: false,
                }
            }} />
        </>
        
  )
}

export default ProfileBarChart