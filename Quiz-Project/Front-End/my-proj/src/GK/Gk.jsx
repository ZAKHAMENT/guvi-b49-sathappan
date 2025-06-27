import  styles from './Quizes.module.css'
import { useState, useRef, useEffect, useMemo} from 'react';
import {  useNavigate, Link,useParams, useLocation,  } from 'react-router-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useUser } from '../UserContext';

function Gk() {
  const [activePage, setActivePage] = useState('All');// 
   const navigate = useNavigate();
   const [selectedQuizType, setSelectedQuizType] = useState('all');  // New state to track quiz type
   console.log(selectedQuizType);
   const [selectedDifficulty, setSelectedDifficulty] = useState('all'); // State for difficulty
   const { quizType } = useParams();
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const { userCredentials } = useUser();

   const QuizMCQCardData = {
  choose: [
    { id: '1', image: '/images/guvi-icon.png', title: 'Choose - Unit-1', score: '-', coins: 0, isCompleted: false, tag: 'choose', keyword: 'gk/choose/1',difficulty: 'easy' },
    { id: '2', image: '/images/guvi-icon.png', title: 'Choose - Unit-2', score: '-', coins: 0, isCompleted: false, tag: 'choose', keyword: 'gk/choose/2', difficulty: 'easy' },
    { id: '3', image: '/images/guvi-icon.png', title: 'Choose - Unit-3', score: '-', coins: 0, isCompleted: false, tag: 'choose', keyword: 'gk/choose/3', difficulty: 'easy' },
    { id: '4', image: '/images/guvi-icon.png', title: 'Choose - Unit-4', score: '-', coins: 0, isCompleted: false, tag: 'choose', keyword: 'gk/choose/4', difficulty: 'medium' },
    { id: '5', image: '/images/guvi-icon.png', title: 'Choose - Unit-5', score: '-', coins: 0, isCompleted: false, tag: 'choose', keyword: 'gk/choose/5', difficulty: 'medium' },
    { id: '6', image: '/images/guvi-icon.png', title: 'Choose - Unit-6', score: '-', coins: 0, isCompleted: false, tag: 'choose', keyword: 'gk/choose/6', difficulty: 'medium' },
    { id: '7', image: '/images/guvi-icon.png', title: 'Choose - Unit-7', score: '-', coins: 0, isCompleted: false, tag: 'choose', keyword: 'gk/choose/7', difficulty: 'hard' },
    { id: '8', image: '/images/guvi-icon.png', title: 'Choose - Unit-8', score: '-', coins: 0, isCompleted: false, tag: 'choose', keyword: 'gk/choose/8', difficulty: 'hard' },
    { id: '9', image: '/images/guvi-icon.png', title: 'Choose - Unit-9', score: '-', coins: 0, isCompleted: false, tag: 'choose', keyword: 'gk/choose/9', difficulty: 'hard' },
  ],
  fillUps: [
    { id: '1', image: '/images/guvi-icon.png', title: 'Fill Ups Unit-1', score: '-', coins: 0, isCompleted: false, tag: 'fill-ups', keyword: 'gk/fill-ups/1', difficulty: 'easy' },
    { id: '2', image: '/images/guvi-icon.png', title: 'Fill Ups Unit-2', score: '-', coins: 0, isCompleted: false, tag: 'fill-ups', keyword: 'gk/fill-ups/2', difficulty: 'easy' },
  ],
  guessByImage: [
    { id: '1', image: '/images/guvi-icon.png', title: 'Guess by Image Unit-1', score: '-', coins: 0, isCompleted: false, tag: 'guess-by-image', keyword: 'gk/guess-by-image/1', difficulty: 'easy' },
    { id: '2', image: '/images/guvi-icon.png', title: 'Guess by Image Unit-2', score: '-', coins: 0, isCompleted: false, tag: 'guess-by-image', keyword: 'gk/guess-by-image/2', difficulty: 'easy' },
  ]
};

useEffect(() => {
  // Set the selected quiz type based on the URL parameter when the component mounts or the URL changes
  if (quizType) {
    setSelectedQuizType(quizType);
    setActivePage(quizType.charAt(0).toUpperCase() + quizType.slice(1)); // Update active page for highlighting
  } else {
    setSelectedQuizType('all');
    setActivePage('All');
  }
}, [quizType]);

useEffect(() => {
  const difficulty = queryParams.get('difficulty');
  if (difficulty) {
    setSelectedDifficulty(difficulty.toLowerCase());
  } else {
    setSelectedDifficulty('all');
  }
}, [location.search]);
console.log(userCredentials);

const getFilteredQuizzes = () => {
  const quizzesByType = selectedQuizType === 'choose' ? QuizMCQCardData.choose
                        : selectedQuizType === 'fill-ups' ? QuizMCQCardData.fillUps
                        : selectedQuizType === 'guess-by-image' ? QuizMCQCardData.guessByImage
                        : [...QuizMCQCardData.choose, ...QuizMCQCardData.fillUps];
  if (selectedDifficulty === 'all') {
    return quizzesByType;
  }

  return quizzesByType.filter(quiz => quiz.difficulty === selectedDifficulty);
};

const handlePageClick = (page, quizType) => {
  setActivePage(page);
  setSelectedQuizType(quizType);
};

const handleDifficultyClick = (difficulty) => {
  setSelectedDifficulty(difficulty);
  navigate(`/gk/${selectedQuizType}/?difficulty=${difficulty.toUpperCase()}`);
};
console.log(selectedQuizType);

  return (
    <>
    <div className={styles.flexContainer}>
      <div className={styles.inlineText}>
        <h2 className={styles.inlineText}>General Knowledge</h2>
        <p className={styles.inlineText}>
          In this block we prepared a series of basic level to advanced level &quot;GK&quot; quizes with different level of games, people can engage there knowledge in this segment
          <br/>
          <br />
          <p>Wish you all the best.</p>
        </p>
      </div>
    </div>

    {/*-------------------------- Nav Pagination- --------------------- */}
    <div className={`${styles.paginationContainer} ${styles.fixed}`}>
      <nav aria-label="Page navigation example">
        <ul className={styles.pagination}>
        <Link to='/gk/all'>
        <li className={`${styles.pageItem} ${activePage === 'All' ? styles.active : ''}`}
            onClick={() => handlePageClick('All', 'all')}>
            <a className={styles.pageLink} >All</a>
          </li>
        </Link>
          <Link to='/gk/choose'>
          <li className={`${styles.pageItem} ${activePage === 'Choose' ? styles.active : ''}`}
            onClick={() => handlePageClick('Choose', 'choose')}>
            <a className={styles.pageLink} >Choose</a>
          </li></Link>
          <Link to='/gk/fill-ups'>
          <li className={`${styles.pageItem} ${activePage === 'Fill ups' ? styles.active : ''}`}
            onClick={() => handlePageClick('Fill ups', 'fill-ups')}>
            <a className={styles.pageLink} >Fill Ups</a>
            </li></Link>
            <Link to='/gk/guess-by-image'>
          <li className={`${styles.pageItem} ${activePage === 'Guess by image' ? styles.active : ''}`}
            onClick={() => handlePageClick('Guess by image', 'guess-by-image')}>
            <a className={styles.pageLink} >Guess by Image</a>
            </li></Link>
            <Link to='/gk/mixed-type-quiz'>
          <li className={`${styles.pageItem} ${activePage === 'Mixed type quiz' ? styles.active : ''}`}
            onClick={() => handlePageClick('Mixed type quiz', 'mixed-type-quiz')}>
            <span className={styles.pageLink}>Mixed type Quiz</span>
            </li></Link>
        </ul>
      </nav>
    </div>
  {/* Search Input */}
  <div className={styles.flexContainerDropdownsAbove768}>
  <div className={styles.searchBarContainer}>
    <form className={styles.form}>
      <label className={styles.label} htmlFor="search">
        <input className={styles.input} type="text" required="" placeholder="Search" id="search" />
        <div className={styles.fancyBg}></div>
        <div className={styles.search}>
          <svg id="svgSearch" viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv" style={{ width: '17px', display: 'block' }}>
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </div>
        <button className={styles.closeBtn} type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
      </label>
    </form>
  </div>
  {/*------------------------------------ Dropdowns ------------------------------------------------*/}
  <div className={styles.flexContainerDropdowns}>
  <div className={styles.flexItemsDropdowns}>
    <div className="btn-group">
      <button className={styles.dropdownBtns} type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'violet', }}>
        Difficulty
      </button>
      <ul className="dropdown-menu">
      <li><a onClick={() => handleDifficultyClick('all')} className="dropdown-item">All</a></li>
      <li><a onClick={() => handleDifficultyClick('easy')} className="dropdown-item">Easy</a></li>
      <li><a onClick={() => handleDifficultyClick('medium')} className="dropdown-item">Medium</a></li>
      <li><a onClick={() => handleDifficultyClick('hard')} className="dropdown-item">Hard</a></li>
      </ul>
    </div>
  </div>
  {/* Status Dropdowns */}
  <div className={styles.flexItemsDropdowns}>
    <div className="btn-group">
      <button className={styles.dropdownBtns} type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'violet' }}>
        Status
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" >To-Do</a></li>
        <li><a className="dropdown-item" >Solved</a></li>
        <li><a className="dropdown-item" >Attempted</a></li>
      </ul>
    </div>
  </div>

  <div className={styles.flexItemsDropdowns}>
    <div className="btn-group">
      <button className={styles.dropdownBtns} type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'violet' }}>
        Tags
      </button>
      <ul className="dropdown-menu">
        <li><a  className="dropdown-item">t</a></li>
        <li><a  className="dropdown-item">t</a></li>
        <li><a  className="dropdown-item">t</a></li>
      </ul>
    </div>
  </div>
  {/* Pick one */}
  <div className={styles.flexItemsDropdowns}>
<button type="button" className={styles.pickOnebtn}>
  <svg style={{ backgroundColor: 'yellowgreen', borderRadius: '50%', padding: '5px', height: '28px', width: '28px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles.pickOneSvg} viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path> <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" ></path></svg>
  Pick One
</button>
</div>
</div>
</div>
{/*---------------------------------------- Card------------------------------------------------- */}
<div className={styles.parentcardContainer}>
        <div className={styles.parent}>
        {getFilteredQuizzes().map((cards, index) => {
          let taggg =  cards.keyword;
          let tag = cards.tag;
          if (tag === 'fill-ups') tag = 'fillups'
          if (tag === 'guess-by-image') tag = 'guessByImage'
          const chapterStats = userCredentials.userAllChapterPoints?.[tag]?.[taggg];
          
  return (
    <div className={styles.div1} key={index}>
      <div className={styles.cardContainerQuiz}>
        <div className="card" style={{ borderRadius: '10%' }}>
          <div className={styles.imageContainer}>
            <img src={cards.image} className={styles.quizImg} alt="..." />
            <div className={styles.difficultyContainer}>
              <img
                className={styles.difficulty}
                width="50"
                height="50"
                src="https://img.icons8.com/bubbles/100/brain.png"
                alt="brain"
              />
              {cards.difficulty}
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{cards.title}</h5>
            <div className={styles.innerParent}>
              <div className={styles.innerDiv2}>Coins</div>
              <div className={styles.innerDiv1}>High Score</div>
              <div className={styles.innerDiv3}>Attempts</div>

              <div className={styles.innerDiv4}>
                {chapterStats?.coins ?? '-'}
              </div>
              <div className={styles.innerDiv5}>
                {chapterStats?.highScore ?? '-'}
              </div>
              <div className={styles.innerDiv6}>
                {chapterStats?.attempts ?? '-'}
              </div>
            </div>
            <br />
            <Link
              to={`/gk/${cards.tag}/${cards.id}`}
              style={{
                backgroundColor: 'green',
                padding: '10px 15px',
                color: 'white',
                textDecoration: 'none',
              }}
              className="btn btn-primary"
            >
              Let's Start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
})}

        </div>
      </div>
      {/* <GkQuestions difficulty={propDifficulty} /> */}
      {/* <Layout data= {userCredentials}/> */}
    </>
  );
}
export default Gk;
