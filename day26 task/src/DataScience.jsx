import React from 'react'
import './App.css'
import { useParams } from 'react-router-dom';

function DataScience() {
  const { DataScienceName } = useParams();

  const oldAllInfo = {
    all1: <h3>10 Best Data Science Online Courses for Beginners | 2023</h3>,
    all2: <p>In todays rapidly evolving digital landscape, Data Science has emerged as one of the mostp</p>,
    all3: <p>19 August 2023</p>
    // Add more old entries as needed
  };

  const newAllInfo = {
    all4: <h3>Data Science Webinars and Workshops</h3>,
    all5: <p> In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data</p>,
    all6: <p>20 August 2023</p>,
    // Add more new entries as needed
  };

  const lastAllInfo = {
    all7: <h3>10 Best Data Science Frameworks in 2023</h3>,
    all8: <p>Does data scientists fascinate you? If yes, you must definitely know about data science frameworks</p>,
    all9: <p>21 August 2023</p>
  };

  const oldInfo = oldAllInfo[DataScienceName];
  const newInfo = newAllInfo[DataScienceName];
  const lastInfo = lastAllInfo[DataScienceName];

  return (
    <div className='content-container'>
      {DataScienceName ? (
        <div>
          <h1>{DataScienceName}</h1>
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


export default DataScience