import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <h1 className="heading">douze à deux</h1>
      <img src="/IMG_demo1.jpeg" alt="kickoff" />
      <div>
        <Link href="https://lu.ma/calendar/manage/cal-PIrfoWlJDawpNDO/events">
          <button className="buttons">Join a session</button> 
        </Link>
        <Link href="/pages/about">
          <button className="buttons">The story</button> 
        </Link>
      </div>
    </>
  );
};

export default Home;