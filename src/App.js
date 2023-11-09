import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');
  const [displaydates, setDisplaydates] = useState([]);

  console.log(startdate, '66');
  console.log(enddate, '88');

  const daterange = (e) => {
    e.preventDefault();

    const date1 = new Date(startdate).getTime();
    const date2 = new Date(enddate).getTime();
    const days = 24 * 60 * 60 * 1000;
    for (let i = date1; i < date2; i += days) {
      let date3 = new Date(i).toISOString().split('T')[0];
      console.log(date3, 'dates');
      setDisplaydates((d) => [...d, date3]);
    }
    setStartdate('');
    setEnddate('');
  };
  console.log(displaydates, 'dis');
  return (
    <div>
      <h4>Dates detween start and end date</h4>
      <label>Start date:</label>
      <input
        type="date"
        value={startdate}
        onChange={(e) => setStartdate(e.target.value)}
      />{' '}
      <br /> <br />
      <label>End date:</label>
      <input
        type="date"
        value={enddate}
        onChange={(e) => setEnddate(e.target.value)}
      />{' '}
      <br /> <br />
      <input type="submit" onClick={daterange} />
      <div>
        {displaydates.length > 0 && (
          <div>
            <h5> Dates </h5>

            {displaydates.map((items) => {
              return <li>{items}</li>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
