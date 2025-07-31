import React from 'react';
import './App.css'
import { useParams } from 'react-router-dom';

function All() {
  const { allName } = useParams();

  const oldAllInfo = {
    all1: <h3>The Scope of Motion Graphics in 2023</h3>,
    all2: <p>Ever seen those moving pictures on your screen that tell a story? That’s motion graphics!</p>,
    all3: <p>19 August 2023</p>
    // Add more old entries as needed
  };

  const newAllInfo = {
    all4: <h3>8 Best YouTube Channels to Learn Digital Marketing 2023</h3>,
    all5: <p> Our todays digital age, staying ahead of the curve in the field of marketing is very important to as</p>,
    all6: <p>20 August 2023</p>,
    // Add more new entries as needed
  };

  const lastAllInfo = {
    all7: <h3>Top 10 Best Automation Testing Tools in 2023</h3>,
    all8: <p>Automation testing tools have really become a great and important factor in building efficient web designs</p>,
    all9: <p>21 August 2023</p>
  };

  const oldInfo = oldAllInfo[allName];
  const newInfo = newAllInfo[allName];
  const lastInfo = lastAllInfo[allName];

  return (
   <>
    <div className='content-container'>
      {allName ? (
        <div>
          <h1>{allName}</h1>
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
    
    </>
  );
}

export default All;
