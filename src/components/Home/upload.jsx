import React, { useState } from 'react';
import '../../styles/dashboard/upload.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { PiUploadSimpleBold } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Upload = ({ setUpload }) => {

    const [stage, seStage] = useState('stage1');
    const [file, setFile] = useState("");

    //New content upload

    const handleClick = (e) => {
        e.preventDefault();
        seStage('stage2');
    }

    const handleFileChange = event => {
        let input = event.target.files[0];
        if (!input) {
            return
        } else {
            // Create a URL for the selected image and set it in state
            const imageUrl = URL.createObjectURL(input);
            setFile(imageUrl);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file === '') {
            alert('Please select a file');
        }else{
            setUpload(false);
            setFile("");
        }
    }

    console.log(file)

    return (
        <div className='uploadWrap'>
            {stage === 'stage1' &&
                <div className='stage1'>
                    <div className='close'><span onClick={() => setUpload(false)}><AiOutlineCloseCircle /></span></div>
                    <h4>New Content</h4>
                    <p>Select one from following option to upload/manage new content</p>
                    <div className='buttons'>
                        <button onClick={handleClick}>Upload Media from your device</button>
                        <div className='center'>
                            <div className='line'></div>
                            <span>or</span>
                            <div className='line'></div>
                        </div>
                        <button onClick={handleClick}>Cutomise existing templates</button>
                    </div>
                </div>
            }
            {stage === 'stage2' &&
                <div className='stage2'>
                    <h4>Upload Media</h4>
                    <div className='close'><span onClick={() => setUpload(false)}><AiOutlineCloseCircle /></span></div>
                    <form onSubmit={handleSubmit} className='stage2Form'>
                        <div className='fileUpload'>
                            <label>Content<span>*</span></label>
                            <div className='uploading'>
                                {file === '' &&
                                    <div className='upload'>
                                        <span><PiUploadSimpleBold /></span>
                                        <p><label htmlFor='file'>Browse</label>
                                            <input style={{ display: "none" }} type="file" id='file' accept='.png,.jpeg,.jpg,.webg'
                                                onChange={handleFileChange} />
                                            to choose a file</p>
                                    </div>
                                }
                                {file !== '' &&
                                    <img src={file} alt='Upload Image' className='stage2Image' />
                                }
                                <div className='remove' style={{ color: file === '' ? '#3f3f3f' : 'red' }}>
                                    <span onClick={() => setFile("")}><RiDeleteBin6Line /></span>
                                    <p onClick={() => setFile("")}>Remove</p>
                                </div>
                            </div>
                        </div>
                        <div className='inputMenu'>
                            <label>Content Name<span>*</span></label>
                            <input type='text' required />
                        </div>
                        <div className='inputMenu'>
                            <label>Content Description<span>*</span></label>
                            <input type='text' required />
                        </div>
                        <div className='inputMenu'>
                            <label>Media Tags (Optional)</label>
                            <input type='text' />
                        </div>
                        <div className='stage2buttons'>
                            <button onClick={() => setUpload(false)}>Cancel</button>
                            <button type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default Upload