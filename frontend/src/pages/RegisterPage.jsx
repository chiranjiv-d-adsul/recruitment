import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const HeroPattern = ({ pttrn, children }) =>
  <div className={pttrn}>
    {children}
  </div>


const RegisterPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }
    try {
      const res = await axios.post('https://recruit-backend-gwku.onrender.com/api/auth/register', { companyName, email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/candidate-search');
    } catch (err) {
      setError(err.response.data.msg || 'An error occurred');
      console.error(err);
    }
  };

  return (
    <HeroPattern pttrn={'topo-pattern'}>
    <div className='min-h-screen flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded shadow-md w-96'>
        <h2 className='text-2xl mb-4'>Register</h2>
        {error && <p className='text-red-500'>{error}</p>}
        <input
          type='text'
          placeholder='Company Name'
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className='w-full mb-4 p-2 border rounded'
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full mb-4 p-2 border rounded'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full mb-4 p-2 border rounded'
        />
        <input
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='w-full mb-4 p-2 border rounded'
        />
        <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded'>Register</button>
        <p className='mt-4 text-center'>
          Already have an account? <Link to='/login' className='text-blue-500'>Login</Link>
        </p>
      </form>
    </div>
    </HeroPattern>
  );
};

export default RegisterPage;
