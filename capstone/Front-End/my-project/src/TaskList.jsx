import { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import'./TaskList.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SubmittedTasks from './SubmittedTasks';
import Login from './Login';
import RegisterForm from './RegisterForm';
import { Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

  function TaskList() {
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [submittedTasks, setSubmittedTasks] = useState([]);
    const [selectedDay, setSelectedDay] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showSuccessCard, setShowSuccessCard] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedDayText, setSelectedDayText] = useState("");
    const [isLoadingLogout, setIsLoadingLogout] = useState(false); // State to control the loading screen for logout
    const [user, setUser] = useState('sathappan');
    const [submittedTaskIds, setSubmittedTaskIds] = useState([]);
    const navigate = useNavigate();
    const barChartRef = useRef();
//Polar
useEffect(() => {
  const fetchData = async () => {
    try {
      const polarResponse = await axios.get('https://online-task.onrender.com/get-polar-chart-data', {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (polarResponse.status === 200) {
        setPolarAreaChartData(polarResponse.data);
      }
    } catch (error) {
      console.error('Error fetching polar chart data:', error);
    }

    try {
      const barResponse = await axios.get('https://online-task.onrender.com/get-bar-chart-data', {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (barResponse.status === 200) {
        setBarChartData(barResponse.data);
      }
    } catch (error) {
      console.error('Error fetching bar chart data:', error);
    }
  };

  fetchData();
}, []);
    
    // Function to fetch bar chart data
    const fetchBarChartData = async () => {
      try {
        const response = await axios.get('https://online-task.onrender.com/get-bar-chart-data', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
    
        if (response.status === 200) {
          setBarChartData(response.data);
        }
        
      } catch (error) {
        console.error('Error fetching bar chart data:', error);
      }
    };
    // Fetch the bar chart data when the component mounts
    useEffect(() => {
      fetchBarChartData();
    }, []); 
    
      // Fetch the submitted task days
      useEffect(() => {
        const fetchSubmittedTasks = async () => {
          try {
            const response = await axios.get('https://online-task.onrender.com/get-submitted-tasks', {
              withCredentials: true,
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
              },
            });
            setSubmittedTasks(response.data);
          } catch (error) {
            console.error('Error fetching submitted tasks:', error);
          }
        };
      
        fetchSubmittedTasks(); 
      }, []); 
      
      const hasTaskBeenSubmitted = (task) => {
        return submittedTasks.some((submittedTask) => submittedTask.Day === task.Day);
      };
    
      // Used to select Day
      const handleDaySelect = async (day) => {
        if (!showForm) {
          setShowForm(true); // Close the form if open
        } else {
          setShowForm(true); // Open the form if closed
          scrollToFormContainer();
        }
        setSelectedDay(day);
        setSelectedDayText(`${day}`);
      };
    // useEffect to wait for the state update before scrolling
    useEffect(() => {
      scrollToFormContainer();
    }, [selectedDay]);
    
    // TaskData
    const TaskData = [
      {
        Batch: '6A',
        Day: 'Day 1',
        Title: 'Javascript Basics',
        Description: 'Write code using var, let and const.',
        DueDate: '03/12/2023',
        isSubmitted: false, 
      },
      {
        Batch: '6A',
        Day: 'Day 2',
        Title: 'Javascript Methods',
        Description: 'Write code using string and array methods.',
        DueDate: '04/12/2023',
        isSubmitted: false, 
      },
      {
        Batch: '6A',
        Day: 'Day 3',
        Title: 'Javascript Functions',
        Description: 'Write 3 function of code.',
        DueDate: '05/12/2023',
        isSubmitted: false, 
      },
      {
        Batch: '6A',
        Day: 'Day 4',
        Title: 'Javascript CRUD operation',
        Description: 'Implement CRUD operation to complete the code',
        DueDate: '06/12/2023',
        isSubmitted: false, 
      },
      {
        Batch: '6A',
        Day: 'Day 5',
        Title: 'Javascript Basics',
        Description: 'Write code using var, let and const.',
        DueDate: '07/12/2023',
        isSubmitted: false, 
      },
      {
        Batch: '6A',
        Day: 'Day 6',
        Title: 'Javascript Basics and components',
        Description: 'Write code using var, let and const.',
        DueDate: '08/12/2023',
        isSubmitted: false,
      },
    
      {
        Batch: '6A',
        Day: 'Day 7',
        Title: 'React',
        Description: 'Create shopping cart',
        DueDate: '09/12/2023',
        isSubmitted: false,
      },
      {
        Batch: '6A',
        Day: 'Day 8',
        Title: 'React',
        Description: 'Create any website using usecontext',
        DueDate: '10/12/2023',
        isSubmitted: false,
      },
      {
        Batch: '6A',
        Day: 'Day 9',
        Title: 'React',
        Description: 'Create any website implementing CRUD OPERATION',
        DueDate: '11/12/2023',
        isSubmitted: false,
      },
      {
        Batch: '6A',
        Day: 'Day 10',
        Title: 'Node Js',
        Description: 'Use API to create hotel booking system',
        DueDate: '12/12/2023',
        isSubmitted: false, 
      },
      {
        Batch: '6A',
        Day: 'Day 11',
        Title: 'Node Js',
        Description: 'Write code using var, let and const.',
        DueDate: '13/12/2023',
        isSubmitted: false, 
      },
      {
        Batch: '6A',
        Day: 'Day 12',
        Title: 'Node Js',
        Description: 'Implement concept by connecting node js and mongoDB',
        DueDate: '14/12/2023', 
        isSubmitted: false, 
        
      },
    ];
    
    //  _________________________________________Bar chart_______________________________________________
    const [barChartData, setBarChartData] = useState({
      labels: [],
      datasets: [
        {
          label: 'Task no:',
          data: [],
          backgroundColor:'rgb(255, 205, 86)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.4)',
          hoverBorderColor: 'rgba(75,192,192,1)',
          barThickness: 30,
        },
      ],
      
    });
    const options = {
      scales: {
        x: {
          barPercentage: 0.8, 
          categoryPercentage: 0.9, 
          grid: {
            drawOnChartArea: false, 
            lineWidth: 1,
            color: (context) => {
              const index = context.index;
              return index % 2 === 0 ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0)';
            },
          },
        },
      },
    };
    
    // Function to update the bar chart data
    const updateBarChart = (label, data) => {
      console.log(' bar chart with:', label, data);
    
      // Extract the day number from the label
      const dayNumber = label.split(' ')[1];
      const currentDate = getCurrentDateTime().split(' ')[0]; // Extracting only the date
      
      // Maintaining bar chart data structured
      setBarChartData((prevChartData) => {
        const labelsArray = Array.isArray(prevChartData.labels) ? prevChartData.labels : [];
        const datasetsArray = Array.isArray(prevChartData.datasets) && prevChartData.datasets.length > 0
          ? prevChartData.datasets
          : [{ ...prevChartData.datasets[0], data: [] }];
    
        return {
          labels: [`${currentDate} / Day-${dayNumber}`, ...labelsArray],
          datasets: [
            {
              ...datasetsArray[0],
              data: [...datasetsArray[0].data, dayNumber],
            },
          ],
        };
      });
    };
    const [polarAreaChartData, setPolarAreaChartData] = useState({
      labels: [],
      datasets: [
        {
          label: 'Task no:',
          data: [],
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.4)',
          hoverBorderColor: 'rgba(75,192,192,1)',
        },
      ],
    });
    
    const updatePolarAreaChart = (label, data) => {
      // Extracting the numeric part from the label ("Day 9" becomes "9")
      const dayNumber = label.match(/\d+/)[0];
    
      setPolarAreaChartData((prevChartData) => {
        return {
          labels: [...prevChartData.labels, label],
          datasets: [
            {
              ...prevChartData.datasets[0],
              data: [...prevChartData.datasets[0].data, dayNumber],
            },
          ],
        };
      });
    };

    useEffect(() => {
      console.log('Polar Area Chart Data:', polarAreaChartData);

      const polarAreaChartContext = document.getElementById('polarAreaChart').getContext('2d');
      let polarAreaChartInstance = null;

      if (polarAreaChartInstance) {
        polarAreaChartInstance.destroy();
      }

      polarAreaChartInstance = new Chart(polarAreaChartContext, {
        type: 'polarArea',
        data: polarAreaChartData,
        options: {
          responsive: true,
          scale: {
              ticks: {
                  beginAtZero: true
              }
          }
      }
});

      return () => {
        if (polarAreaChartInstance) {
          polarAreaChartInstance.destroy(); 
        }
      };
    }, [polarAreaChartData]);
    
      //User can't enter website until login
    if(!user) {
      return <Navigate to="/login" replace={true}/>
    }
    
    // Function to handle the LOG OUT button click
    const handleLogout = async () => {
        setIsLoadingLogout(true);
      setUser(null);
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsLoadingLogout(false);
      navigate('/login');
    };
    
    // Scroll to form when right button get clicked
    const scrollToFormContainer = () => {
      const formContainer = document.getElementById("form");
      if (formContainer) {
        formContainer.scrollIntoView({ behavior: "smooth" });
      }
    };
    // Scroll to polarchart when button get clicked
    const handleScrollToPolarChart = () => {
      const polarChartContainer = document.getElementById("polarHead");
      if (polarChartContainer) {
        polarChartContainer.scrollIntoView({ behavior: "smooth" });
      }
    };
    
     // Scroll to barchart when button get clicked
      const handleScrollToBarChart = () => {
        if (barChartRef.current) {
          barChartRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
    //Search Bar function
    const filteredTasks = TaskData.filter((task) => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        task.Title.toLowerCase().includes(searchTermLower) ||
        task.Description.toLowerCase().includes(searchTermLower) ||
        task.Day.toLowerCase().includes(searchTermLower) ||
        task.Batch.toLowerCase().includes(searchTermLower)
      );
    });
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
            // Sending a POST request to your server to submit the task
            const submitTask = async (newTask) => {
              try {
                setIsLoading(true);
                const response = await axios.post(
                  'https://online-task.onrender.com/submit-task',
                  
                  newTask,
                  {
                    withCredentials: true,
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                  }
                );
            
                if (response.status === 201) {
                  console.log("Task submitted successfully");
                  setSubmittedTasks((prevSubmittedTasks) => [...prevSubmittedTasks, newTask]);
                  // Update the submitted task IDs state
                  setSubmittedTaskIds((prevIds) => [...prevIds, newTask.Day]);
            
                  // Move the chart update logic here
                  updateBarChart(newTask.Day, newTask.submissionTime);
                  updatePolarAreaChart(newTask.Day, newTask.submissionTime);
            
                  setShowSuccessCard(true);
                  console.log('Token:', localStorage.getItem('token'));
            
                  setTimeout(() => {
                    setShowSuccessMessage(true);
                  }, 4500);
                  setTimeout(() => {
                    setShowSuccessMessage(false);
                  }, 9000);
                } else {
                  console.log("Task submission failed");
                }
              } catch (error) {
                console.error('Error submitting task:', error.response ? error.response.data : error.message);
              } finally {
                setTimeout(() => {
                  setIsLoading(false);
                }, 3500);
              }
            };
            // Current date and time
            const getCurrentDateTime = () => {
              const now = new Date();
              const date = now.toLocaleDateString();
              const time = now.toLocaleTimeString();
              return `${date} ${time}`;
            };
    
    // Validation function to check if the input contains "http" or "https"
    const isValidUrl = (url) => {
      return url.startsWith('http://') || url.startsWith('https://');
    };
    // Function to handle form submission
    const handleSubmit = async (e) => {
      // Update the submitted task dates
      e.preventDefault();
      const frontEndCode = e.target.frontEndCode.value;
      const backEndCode = e.target.backEndCode.value;
    
      // Function to handle form submission
      if (isValidUrl(frontEndCode) && isValidUrl(backEndCode)) {
        const newTask = {
          Day: selectedDay,
          frontEndCode: frontEndCode,
          backEndCode: backEndCode,
          comments: e.target.comments.value,
          submissionTime: getCurrentDateTime(),
        };
        submitTask(newTask);
    
            // Clear the input fields
            e.target.frontEndCode.value = '';
            e.target.backEndCode.value = '';
            e.target.comments.value = '';
    
      } else {
        alert('Enter a valid URL');
      }
    };
    const handleFormSubmit = (e) => {
      handleSubmit(e);
      handleDaySelect();
      setShowForm(false);
      // Scroll to the search bar after submitting the task
      const searchContainer = document.getElementById("search-container");
      if (searchContainer) {
        searchContainer.scrollIntoView({ behavior: "smooth" });
      }
    }; 

    return (
      <> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
{isLoadingLogout && (
               <div className="loading-screen">
               <div className="loop cubes">
                 <div className="item cubes"></div>
                 <div className="item cubes"></div>
                 <div className="item cubes"></div>
                 <div className="item cubes"></div>
                 <div className="item cubes"></div>
                 <div className="item cubes"></div>
               </div>
             </div>
      )}
  {/* _____________________________SIDE BAR___________________________________________ */}

   <div className="wrapper">
  <input type="checkbox" id="btn" hidden checked readOnly  />
        <label htmlFor="btn" className="menu-btn">
          <i className="bi bi-list" id="menu&x">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </i>
        </label>
        <nav id="sidebar">
          <ul className="list-items">
              <li> <Link to="/submitted-tasks"><i className="bi bi-database-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-database-fill" viewBox="0 0 16 16">
      <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223Z"/>
      <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z"/>
      <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z"/>
      <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z"/>
    </svg></i>Submitted Tasks</Link></li> 
<li onClick={handleScrollToBarChart}><Link to=''><i className="bi bi-house-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-fill" viewBox="0 0 16 16">
  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
</svg></i>  Dashboard</Link></li>
            <li><Link to=''  onClick={handleScrollToPolarChart}><i className="fas fa-cog"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pie-chart-fill" viewBox="0 0 16 16">
  <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
</svg></i>  Polar Dashboard</Link></li>
<li><Link to=''><i className="bi bi-chat-left-dots-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg></i>Services</Link></li>
            <li><Link to=""><i className="fas fa-user"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
</svg></i>About us</Link></li>
          </ul>
        </nav>
      </div> 
  {/*____________________________________ Heading Bar _____________________________________________*/}

       <div className='top-bar'> <img className='gt-logo' src="/image/logo-color.png" alt="" /><Link to="/login"><i className="bi bi-box-arrow-in-right"></i></Link><button className='log-btn' onClick={() => { handleLogout();  }}>Logout
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg></button></div>
  <div className='search-container'>
  <div className="input-box">
    <i className="uil uil-search"></i>
    <input
    id='search-container'
      type="text"
      placeholder="Search here..."
      value={searchTerm}
      onChange={handleSearch}
    />
    <button className="button">Search</button>
  </div>
</div>
{/* __________________________________TASK LIST _________________________________________ */}
{showSuccessCard && (
<div className="Card">
        <div className="Icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#ffffff" d="M20 14V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V14M12 15L12 3M12 15L8 11M12 15L16 11"></path> </g></svg>
        </div>
        <div className="Content">
           <h2> <span className="Title-">Task Submitted Successfully</span></h2>
            <div className="Desc">Continue and Keep submitting the tasks learner, we are here to motivate you.</div> 
            <div className="Actions">
                <div>
                    <span href="#" onClick={() => setShowSuccessCard(false)} className="Download">Done </span>
                </div>
                <div>
                </div>
            </div>    
        </div>
        <button type="button" className="Close">
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
</div>
)}
<div className='container'>
<div className="task-list">
<div className='card-container'>
{filteredTasks.map((task, index) => (
  <div className='card' key={index}>
      <i className="bi bi-arrow-right"></i>
      {!hasTaskBeenSubmitted(task) && (
                   <button
                   className='right-btn'
                   onClick={() => handleDaySelect(task.Day)}
                   style={{ display: task.isSubmitted ? 'none' : 'block' }}
                 >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </button>
    )}
    <div className='heading'>
      <div className='dataContainer'>
        <strong>Day:</strong> {task.Day}<br />
        <strong>Batch:</strong> {task.Batch}<br />
        <strong>Title:</strong> {task.Title}<br />
        <strong>Description:</strong> {task.Description} <br />
        <strong>Due Date:</strong> {task.DueDate} <br />
      </div>
    </div>
  </div>
))}
</div>
</div>  
       {/* _______________________________ FORM FIELD ______________________________________ */}
       {/* Loader */}
       {isLoading && (
      <div className="loader"  style={{ zIndex: 9999 }}>
  <div className="box box-1">
    <div className="side-left"></div>
    <div className="side-right"></div>
    <div className="side-top"></div>
  </div>
  <div className="box box-2">
    <div className="side-left"></div>
    <div className="side-right"></div>
    <div className="side-top"></div>
  </div>
  <div className="box box-3">
    <div className="side-left"></div>
    <div className="side-right"></div>
    <div className="side-top"></div>
  </div>
  <div className="box box-4">
    <div className="side-left"></div>
    <div className="side-right"></div>
    <div className="side-top"></div>
  </div>
</div>
)}
       {showForm && (
 <div id='form' className="form">
 <div id='form-container' className="form-container">
   <form className="form" onSubmit={handleFormSubmit}>
     <div className="form-group">
     <h2>Submit Here <span>| {selectedDayText}</span></h2>
<label htmlFor="frontEndCode">Front-End URL</label>
<input type="text" id="frontEndCode" name="frontEndCode" required />
 <div className="alert alert-primary d-flex align-items-center" role="alert">
   <div>
     Carefully enter a valid URL!
   </div>
 </div>
</div>
<div className="form-group">
<label htmlFor="backEndCode">Back-End URL</label>
<input type="text" id="backEndCode" name="backEndCode" required />
 <div className="alert alert-primary d-flex align-items-center" role="alert">
   <div>
   Carefully enter a valid URL!
   </div>
 </div>
</div>
     <div className="form-group">
       <label htmlFor="comments">Comments</label>
       <textarea name="comments" id="comments" rows="10" cols="50" required />
     </div>
     <button className="form-submit-btn" type="submit"> 
       Submit
     </button>
   </form>
 </div>
 </div>
      )}
     </div>
{showSuccessMessage && (
        <div className='info'><div className="success-message">Task submitted successfully <div className="info__icon">
        <i className="bi bi-check-circle"></i> </div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg>
    </div>
</div>
      )}
{/* ________________________________________ROUTER_______________________________________________ */}
        <div className='card-container'>
          <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<RegisterForm/>}/>
  <Route path="/submitted-tasks" element={<SubmittedTasks submittedTasks={submittedTasks} />} />
  </Routes>
        </div>
        <h2>_____________..___Bar Progress <svg width={42} height={42} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.25 23.25H.75V.75h1.5v21h21v1.5Z" />
  <path d="M9 20.25H3.75V9.75H9v10.5Z" />
  <path d="M15.75 20.25H10.5V7.5h5.25v12.75Z" />
  <path d="M22.482 20.25h-5.25V4.5h5.25v15.75Z" />
</svg></h2>
        <div className='barchart-container' style={{ width: 900 }} ref={barChartRef}><Bar data={barChartData} options={options}/> </div>
<h2 id='polarHead'>_______.._________Polar Progress</h2>
<div className='polarAdj'><canvas id="polarAreaChart" className="polar-chart-canvas" width="100" height="100"></canvas></div>
      </>
    );
  } 
   export default TaskList;
  export  function App() {
    return (
      <Router>
        <TaskList />
      </Router>
    );
  } 