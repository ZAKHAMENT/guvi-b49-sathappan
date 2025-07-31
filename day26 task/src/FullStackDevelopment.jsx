import React from 'react'
import './App.css'

import { useParams } from 'react-router-dom';

function full() {
  const { fullName } = useParams();

  const oldAllInfo = {
    all1: <h3>The Top 10 Tools Every Full Stack Developer Should Master in 2023</h3>,
    all2: <p> ‍As a full stack developer, having the right set of tools is crucial for your career</p>,
    all3: <p>19 August 2023</p>
    // Add more old entries as needed
  };

  const newAllInfo = {
    all4: <h3>The Ultimate Guide to Real-World Full Stack Development Applications</h3>,
    all5: <p> Full stack development has become increasingly popular in recent years, with companies seeking professionals who have capable of working in both front and back end</p>,
    all6: <p>20 August 2023</p>,
    // Add more new entries as needed
  };

  const lastAllInfo = {
    all7: <h3>Best Ways to Learn Full Stack Development in 2023</h3>,
    all8: <p>Full stack development is important and will be a promising and an in-demand career in around the world</p>,
    all9: <p>21 August 2023</p>
  };

  const oldInfo = oldAllInfo[fullName];
  const newInfo = newAllInfo[fullName];
  const lastInfo = lastAllInfo[fullName];

  return (
    <div className='content-container'>
      {fullName ? (
        <div>
          <h1>{fullName}</h1>
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


export default full