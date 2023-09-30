import React from 'react';
import './upload.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Upload = ({ setUpload }) => {
    return (
        <div className='uploadWrap'>
            <div className='stage1'>
                <div className='close'><span onClick={() => setUpload(false)}><AiOutlineCloseCircle /></span></div>
                <h4>New Content</h4>
                <p>Select one from following option to upload/manage new content</p>
                <div className='buttons'>
                    <button>Upload Media from your device</button>
                    <div className='center'>
                        <div className='line'></div>
                        <span>or</span>
                        <div className='line'></div>
                    </div>
                    <button>Cutomise existing templates</button>
                </div>
            </div>
        </div>
    )
}

export default Upload