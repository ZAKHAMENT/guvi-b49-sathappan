import { useState, useEffect } from 'react';
import styles from './SubmittedTasks.module.css';
import axios from 'axios';

function SubmittedTasks() {
  const [submittedTasks, setSubmittedTasks] = useState([]);

  useEffect(() => {
    // HTTP request to fetch the submitted tasks from the server when the component loads.
    axios.get('https://task-submission-d4k5.onrender.com/get-submitted-tasks',{
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
        if (response.status === 200) {
          setSubmittedTasks(response.data);
        } else {
          console.log('Failed to fetch submitted tasks.');
        }
      })
      .catch((error) => {
        console.error('Error fetching submitted tasks:', error);
      });
  }, []);

  return (
    <>
    <h1 className={styles.topBar} ><img className={styles.gtLogo} src="https://i.pinimg.com/736x/47/21/71/4721713ecf391e39c753bff5c03a2c10.jpg" alt="" /><span className={styles.headline}>Submitted Tasks</span></h1>
    <div className={styles.wholeContainer}>
    <div className='containers' >
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro"></link>
      <div className={styles.cardInfo}>
      {submittedTasks.map((task, index) => (
  <div className={styles.card} key={index}>
    <strong>Day:</strong> <span className='j'>{task.Day}</span><br />
    <strong>Name:</strong> <span className='j'>{task.username}</span><br />
    <strong>Front-End source code :</strong> <span className='j'>{task.frontEndCode}</span><br />
    <strong>Back-End source code:</strong> <span className='j'>{task.backEndCode}</span> <br />
    <strong>Comments:</strong> <span className='j'>{task.comments} </span><br />
    {/* <strong>Submission Time:</strong><span className='j'> {task.submissionTime}</span> <br /> */}
  </div>
))}
      </div>
    </div>
    <img className={styles.taskImage} src="https://stories.freepiklabs.com/api/vectors/task/cuate/render?color=&background=complete" alt="" />
    </div>
    </>
  );
}
export default SubmittedTasks;