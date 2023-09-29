import React, { useState } from 'react';
import './dashboard.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiSortAlt2 } from 'react-icons/bi';

const DashBoard = () => {

    const [active, setActive] = useState('publish');

    const published = [
        {
            id: 1,
            content: 'Order Poster',
            author: 'Jane',
            date: 'May 01, 2023',
            size: '2mb'
        },
        {
            id: 2,
            content: 'Year end Sale Poster',
            author: 'Jane',
            date: 'May 02, 2023',
            size: '2mb'
        },
        {
            id: 3,
            content: 'Order Poster',
            author: 'Jane',
            date: 'May 03, 2023',
            size: '2mb'
        },
        {
            id: 4,
            content: 'Year end Sale Poster',
            author: 'Jane',
            date: 'May 04, 2023',
            size: '2mb'
        },
        {
            id: 5,
            content: 'Flat 50% poster',
            author: 'Jane',
            date: 'May 05, 2023',
            size: '1mb'
        },
    ];

    const draft = [
        {
            id: 1,
            content: 'Draft',
            author: 'Jane',
            date: 'May 13, 2023',
            size: '2mb'
        },
        {
            id: 2,
            content: 'Sale Poster',
            author: 'Jane',
            date: 'May 02, 2023',
            size: '2mb'
        },
        {
            id: 3,
            content: 'Order',
            author: 'Jane',
            date: 'May 01, 2023',
            size: '2mb'
        },
    ];
    
    const dispaly = active === 'publish' ? published : draft;

    return (
        <div className='wrap'>
            <div className='content'>
                <h1>MY CONTENT</h1>
                <button>New Content</button>
            </div>
            <div className='container'>
                <div className='options'>
                    <p style={{ color: active === 'publish' ? 'green' : '', borderBottom: active === 'publish' ? '2px solid green' : '' }} onClick={() => setActive('publish')}>Published</p>
                    <p style={{ color: active === 'draft' ? 'green' : '', borderBottom: active === 'draft' ? '2px solid green' : '' }} onClick={() => setActive('draft')}>Drafts</p>
                </div>
                <div className='entries'>
                    <ul className='header'>
                        <li>Content<span><BiSortAlt2 /></span></li>
                        <li>Author</li>
                        <li>Created Date<span><BiSortAlt2 /></span></li>
                        <li>Size</li>
                        <li></li>
                    </ul>
                    {dispaly.map((item, id) => (
                        <ul className='data' key={id}>
                            <li>{item.content}</li>
                            <li>{item.author}</li>
                            <li>{item.date}</li>
                            <li>{item.size}</li>
                            <li><span><BsThreeDotsVertical /></span></li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DashBoard