import React from 'react';
import './sidebar.css';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsPlusCircle, BsDisplay, BsPcDisplay } from 'react-icons/bs';
import { TbNotes } from 'react-icons/tb';
import { MdModeEdit } from 'react-icons/md';
import { AiOutlineYoutube } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import { GrScheduleNew } from 'react-icons/gr';
import './sidebar.css';

const Sidebar = () => {

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
            <div className='menuOption'>
                <h2>Home</h2>
                <div className='menu'><span><BiHomeAlt2 /></span><p>Dashboard</p></div>
            </div>
            <div className='menuOption'>
                <h2>Content Management</h2>
                {content.map((item, id) => (
                    <div key={id} className='menu'><span>{item.icons}</span><p>{item.value}</p></div>
                ))}
            </div>
            <div className='menuOption'>
                <h2>Display Management</h2>
                {display.map((item, id) => (
                    <div key={id} className='menu'><span>{item.icons}</span><p>{item.value}</p></div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar