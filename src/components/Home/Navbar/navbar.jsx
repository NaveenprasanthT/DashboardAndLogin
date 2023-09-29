import React, { useEffect, useState } from 'react';
import logo from '../../../Assets/aictec.png';
import profile from '../../../Assets/picture.png';
import { IoNotifications } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import './navbar.css';

const Navbar = () => {

    var [date, setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });


    return (
        <div className='navbarWrap'>
            <div className='logoWrap'>
                <img src={logo} alt='logo' />
            </div>
            <div className='navbarRight'>
                <div className='time'>
                    <p>GMT+5:30</p>
                    <p>{date.toLocaleDateString()}, {date.toLocaleTimeString()}</p>
                </div>
                <div className='profileContainer'>
                    <span><IoNotifications /></span>
                    <div className='profile'>
                        <div className='profileImage'>
                            <img src={profile} alt='profile' />
                            <div className='absolute'></div>
                        </div>
                        <div className='textContainer'>
                            <h4>Mike Jordan</h4>
                            <p>Admin</p>
                        </div>
                    </div>
                    <span><IoIosArrowDown /></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar