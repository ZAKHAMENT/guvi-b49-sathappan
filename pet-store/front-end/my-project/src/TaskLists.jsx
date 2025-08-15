// ... (existing imports)

import { Bar } from 'react-chartjs-2';

function TaskList() {
  // ... (existing code)

  // Function to update the submitted task dates in your dataset or chart
  const updateSubmittedTaskDates = (date) => {
    setSubmittedTaskDates([...submittedTaskDates, date]);
    updateBarChart([...submittedTaskDates, date]); // Update the bar chart
  };

  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Submitted Tasks',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [],
      },
    ],
  });

  const updateBarChart = (dates) => {
    const uniqueDates = [...new Set(dates)]; // Remove duplicates
    const counts = uniqueDates.map((date) =>
      dates.filter((d) => d === date).length
    );

    setBarChartData({
      ...barChartData,
      labels: uniqueDates,
      datasets: [
        {
          ...barChartData.datasets[0],
          data: counts,
        },
      ],
    });
  };

  // ... (existing code)

  return (
    <>
      {/* ... (existing code) */}
      
      <Bar data={barChartData} />

      {/* ... (existing code) */}
    </>
  );
}

export default TaskList;
