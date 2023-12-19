const mongoose = require("mongoose");
const { Schema } = mongoose;

const barChartDataSchema = new mongoose.Schema({
  labels: [String],
  datasets: [
    {
      label: String,
      data: [Number],
      // Other properties as needed
    },
  ],
});

const BarChartDataModel = mongoose.model('BarChartData', barChartDataSchema);
