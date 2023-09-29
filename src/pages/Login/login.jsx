import React, { useState } from 'react';
import logo from '../../Assets/logo.png';
import { HiOutlineUser, HiOutlineEye } from 'react-icons/hi';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";import './login.css';

const Login = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        password: '',
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.name !== "" && formData.password !== ""){
            navigate('/home');
        }else{
            alert("Enter All the fields")
        }
    }

    return (
        <div className='loginWrap'>
            <img src={logo} alt='logo' />
            <div className='formContainer'>
                <div className='title'>
                    <h4>Welcome back!</h4>
                    <p>Login to Continue</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='field'>
                        <label><span><HiOutlineUser /></span><p>Username</p></label>
                        <input type="text" name='name' value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className='field2'>
                        <label><span><RiLockPasswordLine /></span><p>Password</p></label>
                        <input
                            type={showPassword ? 'text' : "password"}
                            name='password' value={formData.password} onChange={handleInputChange}
                            inputMode="none"
                        />
                        <div className='showPassword' onClick={() => setShowPassword(!showPassword)}><span>{ showPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}</span></div>
                    </div>
                    <p className='forgot'>Forgot Password?</p>
                    <button type="submit"
                        style={{backgroundColor: formData.name !== "" && formData.password !== "" ? 'green' : '#0000006e'}}
                    >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login