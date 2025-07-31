// import styles from './Quizes.module.css';
// import { useState, useRef, useEffect, useMemo} from 'react';
// import {  useNavigate, Link,useParams} from 'react-router-dom';
// import axios from 'axios'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// function GkQuestions({difficulty}) {
//     const [blockThePage, setBlockThePage] = useState(true);
//     const [showThePage, setShowThePage] = useState(true);
//     const [showBlurEffect, setShowBlurEffect] = useState(true);
//     const navigate = useNavigate();
//     const currDifficulty = difficulty
//     console.log(currDifficulty);
//     class Node {
//       constructor(data) {
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//         this.len = 0;
//       }
//     }
    
//     class DoublyLinkedList {
//       constructor() {
//         this.head = null;
//         this.tail = null;
//         this.current = null;
//       }
    
//       insert(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//           this.head = newNode;
//           this.tail = newNode;
//           this.current = this.head;
//         } else {
//           this.tail.next = newNode;
//           newNode.prev = this.tail;
//           this.tail = newNode;
//         }
//         this.len++
//       }
    
//       traverseForward() {
//         if (this.current && this.current.next) {
//           this.current = this.current.next;
//           return this.current.data;
//         }
//         return null;
//       }
    
//       traverseBackward() {
//         if (this.current && this.current.prev) {
//           this.current = this.current.prev;
//           return this.current.data;
//         }
//         return null;
//       }
//     }
//     // Quiq: choose
//     const chooseQuestions = useMemo(() => ({
//       easy: [
//         // gk/choose/1
//         { id: 1, question: '1. In what year did the Great October Socialist Revolution take place?', options: { a: '1917', b: '1923', c: '1914', d: '1920' }, correctAnswer: 'a', tag: 'gk/choose/1' },
//         { id: 2, question: '2. What is the largest lake in the world?', options: { a: 'Caspian Sea', b: 'Baikal', c: 'Lake Superior', d: 'Ontario' }, correctAnswer: 'a', tag: 'gk/choose/1'  },
//         { id: 3, question: '3. Which planet in the solar system is known as the “Red Planet”?', options: { a: 'Venus', b: 'Earth', c: 'Mars', d: 'Jupiter' }, correctAnswer: 'c', tag: 'gk/choose/1'  },
//         { id: 4, question: '4. Who wrote the novel “War and Peace”?', options: { a: 'Anton Chekhov', b: 'Fyodor Dostoevsky', c: 'Leo Tolstoy', d: 'Ivan Turgenev' }, correctAnswer: 'c', tag: 'gk/choose/1'  },
//         { id: 5, question: '5. What is the capital of Japan?', options: { a: 'Beijing', b: 'Tokyo', c: 'Seoul', d: 'Bangkok' }, correctAnswer: 'b', tag: 'gk/choose/1'  },
//         { id: 6, question: '6. Which river is the longest in the world?', options: { a: 'Amazon', b: 'Mississippi', c: 'Nile', d: 'Yangtze' }, correctAnswer: 'c', tag: 'gk/choose/1'  },
//         { id: 7, question: '7. What gas is used to extinguish fires?', options: { a: 'Oxygen', b: 'Nitrogen', c: 'Carbon dioxide', d: 'Hydrogen' }, correctAnswer: 'c', tag: 'gk/choose/1'  },
//         { id: 8, question: '8. What animal is the national symbol of Australia?', options: { a: 'Kangaroo', b: 'Koala', c: 'Emu', d: 'Crocodile' }, correctAnswer: 'a', tag: 'gk/choose/1'  },
//         { id: 9, question: '9. Which of the following planets is not a gas giant?', options: { a: 'Mars', b: 'Jupiter', c: 'Saturn', d: 'Uranus' }, correctAnswer: 'a', tag: 'gk/choose/1'  },
//         { id: 10, question:'10. What is the name of the process by which plants convert sunlight into energy?', options: { a: 'Respiration', b: 'Photosynthesis', c: 'Oxidation', d: 'Evolution' }, correctAnswer: 'b', tag: 'gk/choose/1' },
//         { id: 11, question: '11. What chemical element is designated as “Hg”?', options: { a: 'Silver', b: 'Tin', c: 'Copper', d: 'Mercury' }, correctAnswer: 'd', tag: 'gk/choose/1'  },
//         { id: 12, question: '12.   In what year was the first international modern Olympiad held?', options: { a: '1896', b: '1900', c: '1912', d: '1924' }, correctAnswer: 'a', tag: 'gk/choose/1'  },
//       ], 
//       medium : [ 
//         { id: 1, question: '1. Which river is the longest in the world?', options: { a: 'Amazon', b: 'Mississippi', c: 'Nile', d: 'Yangtze' }, correctAnswer: 'c', tag: 'gk/choose/4' },
//         { id: 2, question: '2. What gas is used to extinguish fires?', options: { a: 'Oxygen', b: 'Nitrogen', c: 'Carbon dioxide', d: 'Hydrogen' }, correctAnswer: 'c', tag: 'gk/choose/4'  },
//       ]
//     }),[]); 
  
//     // Quiz: Fill ups
//     const fillUpsQuestions = useMemo(() => ({
//       easy: [
//         // gk/fill-ups/1
//         { id: 1, question: "Which animal is known as the 'Ship of the Desert'?", correctAnswer: "camel", tag: 'gk/fill-ups/1'},
//         { id: 2, question: "How many days are there in a week?", correctAnswer: "seven", tag: 'gk/fill-ups/1' },
//         { id: 3, question: "How many hours are there in a day?", correctAnswer: "twenty four", tag: 'gk/fill-ups/1' },
//         { id: 4, question: "How many letters are there in the English alphabet?", correctAnswer: "twenty six", tag: 'gk/fill-ups/1' },
//         { id: 5, question: "Rainbow consists of how many colours?", correctAnswer: "seven", tag: 'gk/fill-ups/1' },
//         { id: 6, question: "How many days are there in a year?", correctAnswer: "three sixty five", tag: 'gk/fill-ups/1' },
//         { id: 7, question: "How many minutes are there in an hour?", correctAnswer: "sixty", tag: 'gk/fill-ups/1' },
//         { id: 8, question: "How many seconds are there in a minute?", correctAnswer: "sixty", tag: 'gk/fill-ups/1' },
//         { id: 9, question: "How many seconds make one hour?", correctAnswer: "three thousand and six hundred", tag: 'gk/fill-ups/1' },
//         { id: 10, question: "Baby frog is known as", correctAnswer: "tadpole", tag: 'gk/fill-ups/1' },
//         { id: 11, question: "How many consonants are there in the English alphabet?", correctAnswer: "twenty one", tag: 'gk/fill-ups/1' },
//         { id: 12, question: "How many vowels are there in the English alphabet and name them?", correctAnswer: "five", tag: 'gk/fill-ups/1' },
//         // gk/fill-ups/2
//         { id: 13, question: "Which animal is known as the king of the jungle?", correctAnswer: "lion", tag: 'gk/fill-ups/2' },
//         { id: 14, question: "Name the National bird of India?", correctAnswer: "peacock", tag: 'gk/fill-ups/2' },
//         { id: 15, question: "Name the National animal of India?", correctAnswer: "tiger", tag: 'gk/fill-ups/2' },
//         { id: 16, question: "What is the National Anthem of India?", correctAnswer: "jana gana mana", tag: 'gk/fill-ups/2' },
//         { id: 17, question: "Name the national flower of India?", correctAnswer: "lotus", tag: 'gk/fill-ups/2' },
//         { id: 18, question: "Name the National fruit of India?", correctAnswer: "mango", tag: 'gk/fill-ups/2' },
//         { id: 19, question: "What is the National song of India?", correctAnswer: "vande maataram", tag: 'gk/fill-ups/2' },
//         { id: 20, question: "Who designed the National Flag of India?", correctAnswer: "pingali venkayya", tag: 'gk/fill-ups/2' },
//         { id: 21, question: "Name the National game of India?", correctAnswer: "hockey", tag: 'gk/fill-ups/2' },
//         { id: 22, question: "Name the National tree of India?", correctAnswer: "banyan tree", tag: 'gk/fill-ups/2' },
//         { id: 23, question: "Name the National river of India?", correctAnswer: "ganga", tag: 'gk/fill-ups/2' },
//         { id: 24, question: "Name the National Reptile of India?", correctAnswer: "king cobra", tag: 'gk/fill-ups/2' },
//         // gk/fill-ups/3
//         { id: 25, question: "What is the capital of India?", correctAnswer: "new delhi", tag: 'gk/fill-ups/3' },
//         { id: 26, question: "Name the biggest continent in the world?", correctAnswer: "Asia", tag: 'gk/fill-ups/3' },
//         { id: 27, question: "How many continents are there in the world?", correctAnswer: "seven", tag: 'gk/fill-ups/3' },
//         { id: 28, question: "What is the color that start with 'y' and end with 'w'?", correctAnswer: "yellow", tag: 'gk/fill-ups/3' },
//         { id: 29, question: "Which is the smallest month of the year?", correctAnswer: "february", tag: 'gk/fill-ups/3' },
//         { id: 30, question: "Name the house made of ice?", correctAnswer: "igloo", tag: 'gk/fill-ups/3' },
//         { id: 31, question: "Which colour symbolises peace?", correctAnswer: "white", tag: 'gk/fill-ups/3' },
//         { id: 32, question: "Name the largest mammal?", correctAnswer: "blue whale", tag: 'gk/fill-ups/3' },
//         { id: 33, question: "Sun rises in the ", correctAnswer: "east", tag: 'gk/fill-ups/3' },
//         { id: 34, question: "How many sides are there in a triangle?", correctAnswer: "three", tag: 'gk/fill-ups/3' },
//         { id: 35, question: "Name the largest planet of our Solar System?", correctAnswer: "jupiter", tag: 'gk/fill-ups/3' },
//         { id: 36, question: "Name the smallest planet of our Solar System?", correctAnswer: "mercury", tag: 'gk/fill-ups/3' },
//       ],
//       medium : [
//         // { id: 1, question: 'Which river is the longest in the world?', correctAnswer: 'c', tag: 'gk/choose/4' },
//       ]
//     }),[]);
  
    
//     const { tag, id } = useParams();
//     const isValidUrl = `gk/${tag}/${id}`;
//     const [currentQuestion, setCurrentQuestion] = useState(null);
//     const questionsList = useRef(new DoublyLinkedList());
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(null);
    
//     let [timer, setTimer] = useState();
//     const [selectedOptions, setSelectedOptions] = useState({});
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [stateProgress, setStateProgress] = useState(0);
//     const [progress, setProgress] = useState({ 
//       answers: {},
//       time: 0,
//       currentQuestion: null,
//       subProgress: 0,
//       tag: null,
//      });
  
//     // Function to save progress to the server
//   const saveProgressToServer = async () => {
//     try {
//       const userId = user?._id;
//       if (!userId) {
//         console.warn("User not found, skipping progress save.");
//         return;
//       } 
//       // Store the current user's progress
//       progress.time = timer;
//       progress.answers = selectedOptions; 
//       progress.subProgress = stateProgress;
//       progress.tag = isValidUrl;
//       await axios.post("http://localhost:3000/api/user-temp-progress", { userId, progress });
//       console.log("Progress saved successfully!");
//     } catch (error) {
//       console.error("Error saving progress:", error);
//     }
//   };
  
//      useEffect(() => {  
//     const fetchProfile = async () => {
//       try {
//         const $FSA_auth_token = localStorage.getItem('$FSA_auth_token');
//         if (!$FSA_auth_token) {
//           console.warn('Auth token not found');
//           return;
//         }
  
//         const response = await axios.get('http://localhost:3000/myProfile', {
//           headers: {
//             Authorization: `Bearer ${$FSA_auth_token}`,
//           },
//         });
//           setUser({
//             _id: response.data._id,
//           });
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//       }
//     };
//     fetchProfile();
  
//     // Trigger function for whether user making tab switches or not
//     const handleVisibilityChange = () => {
//       if (document.visibilityState === "hidden") {
//         console.log('Switched');
//       } else if (document.visibilityState === "visible") {
//         //console.log("Tab is active again");
//       }
//     };
  
//     document.addEventListener("visibilitychange", handleVisibilityChange);
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);    
//     };
//    }, []);
//    let currentRetrieveTime = useRef(120);
  
//    useEffect(() => {
//     const fetchProgress = async () => {
//       try {
//         const $FSA_auth_token = localStorage.getItem('$FSA_auth_token');
  
//         if (!$FSA_auth_token) {
//           console.warn("Auth token not found");
//           return;
//         }
  
//         const response = await axios.get("http://localhost:3000/api/retrieve-user-temp-progress", {
//           headers: {
//             Authorization: `Bearer ${$FSA_auth_token}`,
//           },});
  
//         const userProgress = response.data.find((progress) => progress.quizId === isValidUrl);
//         if (userProgress) {
//           setTimer(userProgress.time);        
//           setSelectedOptions(userProgress.answers);
//           setStateProgress(userProgress.subProgress);
//           currentRetrieveTime.current = userProgress.time;
//         } else {
//           console.warn("No progress found for the current quiz");
//         }
//       } catch (error) {
//         console.error("Error fetching progress:", error);
//       }
//     };
//     fetchProgress();
//   }, [user]);
  
//   useEffect(() => {
//     if (!user || timer === undefined) return;
//     const intervalId = setInterval(() => {
//       setTimer((prev) => {
//         if (prev > 0) {
//           saveProgressToServer();
//           return prev - 1;
//         } else {
//           clearInterval(intervalId);
//           handleSubmitAns();
//           return 0;
//         }
//       });
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, [timer]);
  
//   // Progress
//   let total = 12;
//   const percentage = (stateProgress / total) * 100,
//         radius = 50,
//         circumference = 2 * Math.PI * radius,
//         offset = circumference - (percentage / 100) * circumference;
  
//   useEffect(() => {
//     const chooseCollection = [];
//     console.log(chooseCollection);
//     for (const key in chooseQuestions) {
//       chooseQuestions[key].forEach((curr) => {
//         if (!chooseCollection.includes(curr.tag)) {     
//           chooseCollection.push(curr.tag);
//         }
//       });
//     }
  
//     if (chooseCollection.includes(isValidUrl)) {
//       for (const key in chooseQuestions) {
//         chooseQuestions[key].forEach((curr) => {
//           if (curr.tag === isValidUrl) {
//             questionsList.current.insert(curr);
//           }
//         });
//       }
  
//       if (questionsList.current.head) {
//         setCurrentQuestion(questionsList.current.head.data);
//         setLoading(false);
//       } else {
//         alert('No questions there');
//       }
//     } else {
//       navigate('/not-found');
//     }
//   }, []);
  
//   useEffect(() => { 
//     if (currentQuestion && currentQuestion.id !== undefined) {
//       setSelectedOption(selectedOptions?.[currentQuestion.id] || null);
//     }
//   }, [currentQuestion, selectedOptions]);
  
//   const handleBlockingPage = () => {
//     const userId = user?._id;
//     setShowBlurEffect(false);
//     setBlockThePage(false);
//     // console.log(currentRetrieveTime.current);
//     setTimer(currentRetrieveTime.current);
//     console.log(userId);
    
//     const saveAttempts = async () => {
//       try {
//         await axios.post("http://localhost:3000/api/count-attempts", { userId, tag, isValidUrl});
//         console.log("Progress saved successfully!");
//       } catch (error) {
//         console.error("Error saving progress:", error);
//       }
//     };
//     saveAttempts();
//   }; 
   
//   let displayMinutes = Math.floor(timer / 60),
//       displaySeconds = timer % 60;
  
  
//   // Trigger save on page refresh or navigation away
//   useEffect(() => {
//     const handleUnload = async (event) => {
//       saveProgressToServer();
//       // Required to ensure the browser waits for the save operation
//       event.preventDefault();
//       event.returnValue = ""; // Modern browsers ignore this, but it’s still required for some older ones
//     };
  
//     window.addEventListener("beforeunload", handleUnload);
//     return () => {
//       window.removeEventListener("beforeunload", handleUnload);
//     };
//   }, );
  
//   const handleNext = () => {
//     const nextQuestion = questionsList.current.traverseForward();
//     if (nextQuestion) {
//       setCurrentQuestion(nextQuestion);
//       setSelectedOption(selectedOptions[nextQuestion.id] || null);
//     } else {
//       alert('No more questions!');
//     }
//   };
  
//   const handlePrev = () => {
//     const prevQuestion = questionsList.current.traverseBackward();
//     console.log(selectedOptions);
    
//     if (prevQuestion) {
//       setCurrentQuestion(prevQuestion);
//       setSelectedOption(selectedOptions[prevQuestion.id] || null);
//     } else {
//       alert('No previous questions!');
//     }
//   };
  
//   const handleOptionChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedOptions((prevSelectedOptions) => {
//       const newOptions = {
//         ...prevSelectedOptions,
//         [currentQuestion.id]: selectedValue,
//       };
//       return newOptions;
//     });
  
//     if (!Object.hasOwn(selectedOptions, currentQuestion.id)) {
//       setStateProgress((count) => count + 1);
//     }
//     setSelectedOption(selectedValue);
//   };
  
//   // Total correct answers validation
//   const handleSubmitAns = () => {
//     const userAnswers = selectedOptions;  
//     const correctAnswers = [];
//     let curr = questionsList.current.head;
//     for (let i = 1; i <= selectedOptions ? selectedOptions: i-1; i++) {
//       correctAnswers.push(curr.data);
//       curr = curr.next;
//     }
  
//     let userFinalResult = 0;
//     for (const key in userAnswers) {
//       correctAnswers.forEach((curr) => {
//         if (key === curr.id && curr.correctAnswer === userAnswers[key]) {
//           userFinalResult++;
//         }
//       });
//     }
//     const userId = user?._id;
  
//     const saveResult = async () => {
      
  
//       try {
//         await axios.post('http://localhost:3000/api/save-game-info', {userId, userFinalResult, isValidUrl});
//       } catch (error) {
//         console.log( "Error saving result:",error);
//       }
//     }
//     saveResult();
//   };
  
//   if (loading) {
//     return <div>------------------Not Found</div>
//   }
    
//     return (
//       <>
//       <div className={styles.gkQuestionsBody}>
//          {showBlurEffect && (
//             <div className={styles.overlay}>
//               <div className={styles.overlayContent}>
//   {/*----------------------------------- Carousel---------------------------------------------- */}
//          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//          <div className="carousel-indicators">
//            <button type="button"data-bs-target="#carouselExampleIndicators"data-bs-slide-to="0"className="active"aria-current="true"aria-label="Slide 1"></button>
//           <button type="button"data-bs-target="#carouselExampleIndicators"data-bs-slide-to="1"aria-label="Slide 2"></button>
//           <button type="button"data-bs-target="#carouselExampleIndicators"data-bs-slide-to="2"aria-label="Slide 3"></button>
//         </div> 
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="/images/carousel_Blocker_proj.png" className="d-block w-100" alt="Slide 1" />
//           </div>
//           <div className="carousel-item">
//             <img src="/images/carousel_Blocker_proj.png" className="d-block w-100" alt="Slide 2" />
//           </div>
//           <div className="carousel-item">
//             <img src="/images/carousel_Blocker_proj.png" className="d-block w-100" alt="Slide 3" />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button"data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//       <div className={styles.carouselBtnContainer}>
//   <button  className={styles.startBtn} onClick={() => handleBlockingPage()}>
//   <span className={styles.startText}>Let&rsquo;s Start</span>
//     <span className={styles.startSvg}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="50"
//         height="20"
//         viewBox="0 0 38 15"
//         fill="none"
//       >
//         <path
//           fill="white"
//           d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
//         ></path>
//       </svg>
//     </span>
//   </button>
//   <Link to='/gk'><button className={styles.backBtn}>
//   <span>Back</span>
//     <svg className={styles.backSvg} style={{transform: "scaleX(-1)"}} height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
//   </button></Link>
//   </div>
//               </div>
//             </div>
//           )}
  
//   {/* -----------------------------------------------Circles ------------------------------------*/}
//         {showThePage && (
//   <div className={styles.parent111}>
//   <div className={styles.div111}>
//   <h3 className={styles.stylishHeading}>GK choose-1</h3>
//     <div className={styles.container}>
//         <div className={styles.row}>
//           <div className={styles.circle}>1</div>
//           <div className={styles.circle}>2</div>
//           <div className={styles.circle}>3</div>
//         </div>
//         <div className={styles.row}>
//           <div className={styles.circle}>4</div>
//           <div className={styles.circle}>5</div>
//           <div className={styles.circle}>6</div>
//         </div>
//         <div className={styles.row}>
//           <div className={styles.circle}>7</div>
//           <div className={styles.circle}>8</div>
//           <div className={styles.circle}>9</div>
//         </div>
//         <div className={styles.row}>
//           <div className={styles.circle}>10</div>
//           <div className={styles.circle}>11</div>
//           <div className={styles.circle}>12</div>
//         </div>
//       </div>
//   </div>
//   <div className={styles.div333}>
//     <div className={styles.div333SubContainer}>
//       {/* ----------------------------------- Timer --------------------------------------- */}
//   <div className={styles.outerTimerBox}>
//     <div className={styles.parentTimerContainer}>
//       <div className={styles.timerContainer}>
//         <div className={styles.loader}>
//           <span className={`${styles.hour} ${styles.span}`}></span>
//           <span className={`${styles.min} ${styles.span}`}></span>
//           <span className={`${styles.circel} ${styles.span}`}></span>
//         </div>
//       </div>
//       <h3 className={styles.digitTimer}> {!isNaN(displayMinutes) ?`${displayMinutes}`: "0"}:{ !isNaN(displaySeconds) ? `${displaySeconds}` : "0"}</h3>
//     </div>
//   </div>
//   <div></div>
//   <div></div>
//   <div className={styles.progressContainer}>
//         <svg className={styles.progressCircle} width="120" height="120">
//           <circle
//             className={styles.progressBackground}
//             cx="60"
//             cy="60"
//             r={radius}
//           />
//           <circle
//             className={styles.progressBar}
//             cx="60"
//             cy="60"
//             r={radius}
//             strokeDasharray={circumference}
//             strokeDashoffset={offset}
//           />
//         </svg>
//         <div className={styles.progressText}>{`${stateProgress}/${total}`}</div>
//       </div>
//       </div>
//   <br />
//   {/*----------------------------------- Question Display ------------------------------------------ */}
//     <div>
//    <div className={styles.questionWrapper}><h4 className={styles.questionWrapper}> {currentQuestion.question} </h4></div>
//   <div className={styles.cyberpunkCheckboxContainer}>
//     <label className={styles.cyberpunkCheckboxLabel}> a.) 
//       <input value={'a'} onChange={handleOptionChange} checked={selectedOption === 'a'} type="radio" name="options" className={styles.cyberpunkCheckbox} /> <span> {currentQuestion.options.a} </span>
//     </label>
//     <label className={styles.cyberpunkCheckboxLabel}>b.)  
//       <input value={'b'} onChange={handleOptionChange} checked={selectedOption === 'b'} type="radio" name="options" className={styles.cyberpunkCheckbox} /> <span> {currentQuestion.options.b} </span>
//     </label>
//     <label className={styles.cyberpunkCheckboxLabel}>c.) 
//       <input value={'c'} onChange={handleOptionChange} checked={selectedOption === 'c'} type="radio" name="options" className={styles.cyberpunkCheckbox} /> <span> {currentQuestion.options.c} </span>
//     </label>
//     <label className={styles.cyberpunkCheckboxLabel}>d.)
//       <input value={'d'} onChange={handleOptionChange} checked={selectedOption === 'd'} type="radio" name="options" className={styles.cyberpunkCheckbox} /> <span> {currentQuestion.options.d} </span>
//     </label>
//   </div>
//   </div>
//   {/*------------------------------------ Buttons --------------------------------------*/}
//   <div className={styles.questionBtnContainer}>
//       <button onClick={() => handlePrev()} style={{gap: '6px'}} className={`${styles.btnPrev} ${styles.button}`} id='pre'>
//       <svg className={styles.svg} style={{transform: "scaleX(-1)"}} xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 74 74"height="34"width="34">
//       <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle><path  fill="black"  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"></path></svg>
//     Prev</button>
//       <button onClick={handleSubmitAns} style={{backgroundColor: 'rgb(236, 172, 24)'}} className={`${styles.btnSubmit} ${styles.button}`}>Save & Submit</button>
//       <button onClick={() => handleNext()} className={`${styles.btnNext} ${styles.button}`} id='next'>Next
//       <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 74 74"height="34"width="34">
//       <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
//       <path
//         fill="black"
//         d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
//       ></path>
//     </svg>
//       </button>
//   </div>
//   </div>
//   </div>
//         )}
//   </div>
  
//       </>
//     );
//   }
//   export default GkQuestions;