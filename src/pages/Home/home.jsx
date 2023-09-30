import React, { useState } from 'react';
import './home.css';
import Navbar from '../../components/Home/Navbar/navbar';
import Sidebar from '../../components/Home/Sidebar/sidebar';
import DashBoard from '../../components/Home/Dashboard/dashBoard';
import Upload from '../../components/Home/Upload/upload';

const Home = () => {

  const [upload, setUpload] = useState(false);

  return (
    <>
    {upload && <Upload setUpload={setUpload}/>}
      <div className='homeWrap'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='homeMain'>
          <div className='slider'>
            <Sidebar />
          </div>
          <div className='rightSide'>
            <DashBoard setUpload={setUpload}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home