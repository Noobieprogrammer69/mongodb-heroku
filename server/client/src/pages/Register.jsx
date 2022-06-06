import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/authActions';

import registerVid from '../images/4K Demon Slayer (Glow Edit).mp4'

import Alert from '../components/Alert';

import '../styles/Register.css'

const Register = () => {
  const initialState = {userName: '', fullName: '',email: '', password: '', confirmPassword: ''}
  const [userData, setuserData] = useState(initialState);
  const {userName, fullName, email, password, confirmPassword} = userData;

  const { auth, alert } = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setuserData({...userData, [name]:value})
  }

  useEffect(() => {
    if(auth.token) {
      navigate('/')
    }
  }, [auth.token, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData))
  }

  return (
    <section>
      <video 
        src={registerVid}
        type="video/mp4"
        controls={false}
        autoPlay 
        muted 
        loop
      />
      <div className='form-container'>
      <h1>Register Form</h1>
      <Alert />
      <form onSubmit={handleSubmit}>
        <div className='control'>
          <input type="text" name="fullName" value={fullName} placeholder={alert.fullName ? `${alert.fullName}` : 'FullName'} onChange={handleChange} />
        </div>
        <div className='control'>
          <input type="text" name="userName" value={userName.toLowerCase().replace(/ /g, '')} placeholder={alert.userName ? `${alert.userName}` : 'UserName'} onChange={handleChange} />
        </div>
        <div className='control'>
          <input type="text" name="email" value={email} placeholder={alert.email ? `${alert.email}` : 'Email'} onChange={handleChange} />
        </div>
        <span>
        <div className='control'>
          <input type="text" name="password" value={password} placeholder={alert.password ? `${alert.password}` : 'Password'} onChange={handleChange} />
        </div>
        <div className='control'>
          <input type="text" name="confirmPassword" value={confirmPassword} placeholder={alert.confirmPassword ? `${alert.confirmPassword}` : 'Confirm Password'} onChange={handleChange} />
        </div>
          <div className='control'>
            <button type="submit">Register</button>
          </div>
        </span>
      </form>
      <div className='link'>
        <small>Already have an Account? <Link to="/login">Click here</Link></small>
      </div>
    </div>
    </section>
  )
}

export default Register