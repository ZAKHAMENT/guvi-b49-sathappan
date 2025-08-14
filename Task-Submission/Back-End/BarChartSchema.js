// Bar chart 
const barChartSchema = new mongoose.Schema({
    username: String,
    data: {
      labels: [String],
      datasets: [
        {
          label: String,
          data: [Number],
          // ... other properties
        },
      ],
    },
  });
  const BarChartModel = mongoose.model("BarChart", barChartSchema);