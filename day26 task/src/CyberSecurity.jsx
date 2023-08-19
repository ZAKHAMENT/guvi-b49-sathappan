import React from 'react'
import './App.css'
import { useParams } from 'react-router-dom';


function CyberSecurity() {
  const { CyberSecurityName } = useParams();

  const oldAllInfo = {
    all1: <h3>Cybersecurity Vs Ethical Hacking: Top 10 Differences</h3>,
    all2: <p>Cybersecurity & Ethical hacking and have been key in making sure that your data online</p>,
    all3: <p>19 August 2023</p>
    // Add more old entries as needed
  };

  const newAllInfo = {
    all4: <h3>What is Cybersecurity? Importance and its uses & the growing challenges in 2023!</h3>,
    all5: <p> Look around today, you will witness that we are more reliant on technology and devices</p>,
    all6: <p>20 August 2023</p>,
    // Add more new entries as needed
  };

  const lastAllInfo = {
    all7: <h3>Cybersecurity Jobs: Ultimate Cybersecurity Career Roadmap</h3>,
    all8: <p>According to the job statistics of 2020, cybersecurity jobs were among the top 15 emerging is this one</p>,
    all9: <p>21 August 2023</p>
  };

  const oldInfo = oldAllInfo[CyberSecurityName];
  const newInfo = newAllInfo[CyberSecurityName];
  const lastInfo = lastAllInfo[CyberSecurityName];

  return (
    <div className='content-container'>
      {CyberSecurityName ? (
        <div>
          <h1>{CyberSecurityName}</h1>
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



export default CyberSecurity