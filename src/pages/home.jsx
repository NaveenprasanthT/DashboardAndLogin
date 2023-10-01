import React, { useState } from 'react';
import '../styles/home.css';
import Navbar from '../components/Home/navbar';
import Sidebar from '../components/Home/sidebar';
import DashBoard from '../components/Home/dashBoard';
import Upload from '../components/Home/upload';

const Home = () => {

  const [upload, setUpload] = useState(false);
  const [ navbar, setNavbar ] = useState(false);

  return (
    <>
    {upload && <Upload setUpload={setUpload}/>}
      <div className='homeWrap'>
        <div className='navbar'>
          <Navbar navbar={navbar} setNavbar={setNavbar}/>
        </div>
        <div className='homeMain'>
          <div className='slider'  style={{right : navbar ? '0' : '-60%'}}>
            <Sidebar setNavbar={setNavbar}/>
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