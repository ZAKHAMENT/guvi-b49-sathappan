import React from 'react'
import './App.css'
import { useParams } from 'react-router-dom';

function Career() {
  const { CareerName } = useParams();

  const oldAllInfo = {
    all1: <h3>Top 12 Career Opportunities for UI/UX Design</h3>,
    all2: <p>Are you passionate about offering intuitive and user-friendly digital experiences? Do you have an eye?</p>,
    all3: <p>19 August 2023</p>
    // Add more old entries as needed
  };

  const newAllInfo = {
    all4: <h3>Top 15 Business Analyst Interview Questions With Answers</h3>,
    all5: <p>Business Analyst is a dream role for many but cracking the interview round is a difficut to all.</p>,
    all6: <p>20 August 2023</p>,
    // Add more new entries as needed
  };

  const lastAllInfo = {
    all7: <h3>Is AWS Certification Worth It? | Best AWS Certifications 2023</h3>,
    all8: <p>IT runs the world and is everywhere. And if you’re someone who’s least interested in AWS certificate</p>,
    all9: <p>21 August 2023</p>
  };

  const oldInfo = oldAllInfo[CareerName];
  const newInfo = newAllInfo[CareerName];
  const lastInfo = lastAllInfo[CareerName];

  return (
    <div className='content-container'>
      {CareerName ? (
        <div>
          <h1>{CareerName}</h1>
          <div className='content-box'>
            {oldInfo && <p>{oldInfo}</p>}
            {newInfo && <p>{newInfo}</p>}
            {lastInfo && <p>{lastInfo}</p>}
          </div>
        </div>
      ) : (
        <div className='section-container'>
          <div className='box old-box'>
            {Object.entries(oldAllInfo).map(([key, value]) => (
              <div key={key}>
                <p>{value}</p>
              </div>
            ))}
          </div>
          <div className='box new-box'>
            {Object.entries(newAllInfo).map(([key, value]) => (
              <div key={key}>
                <p>{value}</p>
              </div>
            ))}
          </div>
          <div className='box last-box'>
            {Object.entries(lastAllInfo).map(([key, value]) => (
              <div key={key}>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Career