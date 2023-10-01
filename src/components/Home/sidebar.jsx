import React, { useState } from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsPlusCircle, BsDisplay, BsPcDisplay } from 'react-icons/bs';
import { TbNotes } from 'react-icons/tb';
import { MdModeEdit } from 'react-icons/md';
import { AiOutlineCloseCircle, AiOutlineYoutube } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import { GrScheduleNew } from 'react-icons/gr';
import { IoLogOutOutline } from 'react-icons/io5';
import '../../styles/dashboard/sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ setNavbar }) => {

    const [active, setActive] = useState('My Content');

    const content = [
        {
            icons: <BsPlusCircle />,
            value: 'My Content'
        },
        {
            icons: <TbNotes />,
            value: 'Libraries'
        },
        {
            icons: <MdModeEdit />,
            value: 'Templates'
        },
        {
            icons: <AiOutlineYoutube />,
            value: 'Playlist'
        },
    ]

    const display = [
        {
            icons: <SlLocationPin />,
            value: 'Store Location'
        },
        {
            icons: <BsDisplay />,
            value: 'Display Signage'
        },
        {
            icons: <BsPcDisplay />,
            value: 'Display Groups'
        },
        {
            icons: <GrScheduleNew />,
            value: 'Schedules'
        },
    ]

    return (
        <div className='SidebarWrap'>
            <div className='closeSlider'><span onClick={() => setNavbar(false)}><AiOutlineCloseCircle /></span></div>
            <div className='SidebarContainer'>
                <div className='menuOption'>
                    <h2>Home</h2>
                    <div className='menu'><span><BiHomeAlt2 /></span><p>Dashboard</p></div>
                </div>
                <div className='menuOption'>
                    <h2>Content Management</h2>
                    {content.map((item, id) => (
                        <div key={id} className='menu' onClick={() => setActive(item.value)} id={active === item.value ? 'active' : ''}><span>{item.icons}</span><p>{item.value}</p></div>
                    ))}
                </div>
                <div className='menuOption'>
                    <h2>Display Management</h2>
                    {display.map((item, id) => (
                        <div key={id} className='menu' onClick={() => setActive(item.value)} id={active === item.value ? 'active' : ''}><span>{item.icons}</span><p>{item.value}</p></div>
                    ))}
                </div>
            </div>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='logout'><span><IoLogOutOutline /></span><p>Logout</p></div>
            </Link>
        </div>
    )
}

export default Sidebar;