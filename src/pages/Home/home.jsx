import React from 'react';
import './home.css';
import Navbar from '../../components/Home/Navbar/navbar';
import Sidebar from '../../components/Home/Sidebar/sidebar';
import DashBoard from '../../components/Home/Dashboard/dashBoard';

const Home = () => {
  return (
    <div className='homeWrap'>
      <div className='navbar'>
          <Navbar />
      </div>
      <div className='homeMain'>
        <div className='slider'>
            <Sidebar />
        </div>
        <div className='rightSide'>
            <DashBoard />
        </div>
      </div>
    </div>
  )
}

export default Home