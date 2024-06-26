import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <h1 className="heading">Douze à Deux</h1>
      <text className='subheading'>Where passion and friends come together</text>
      <div style={
        {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          paddingBottom: '50px'
        }
      }><Link href="https://lu.ma/calendar/manage/cal-PIrfoWlJDawpNDO/events" className='buttons'>
          Attend a session
        </Link></div>
   
  
      <img src="landing.png" alt="kickoff" />
      <img src="ripped.png" alt="style" />
      <div className="image-container">
    <img src="paper.png" alt="what-is" />
    <img src="collage1.png" alt="deco" />
  </div>
  <img src="people.png" alt="people" />
    </>
  );
};

export default Home;