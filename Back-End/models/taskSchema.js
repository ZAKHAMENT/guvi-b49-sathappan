import { Timestamp } from "mongodb";

function getISTDate() {
  const now = new Date();
  const ISTOffset = 330 * 60000; // 330 minutes ahead of UTC (5 hours and 30 minutes)
  const ISTTime = new Date(now.getTime() + ISTOffset);
  return ISTTime;
}
// Define a schema for your data
const taskSchema = new mongoose.Schema({
  Day: String,
  name: String,
  learnerId: Number,
  frontEndCode: String,
  backEndCode: String,
  comments: String,
  submissionTime: {
    type: Date,
    default: getISTDate, // Set the default to IST when a new document is created
  },
});

  
  const Task = mongoose.model("Task", taskSchema);

