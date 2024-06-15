import React from 'react';
import { Link } from 'react-router-dom';

const Board = () => {
  return (
    <section className='bg-[#6F5CF9] md:p-[70px] p-[30px] flex items-center justify-center'>
      <div className='text-center text-white'>
        <h1 className='md:text-4xl text-2xl'>Start Recruiting Now</h1>
        <p className='mt-4 md:px-[80px] px-[20px] text-md'>Are you ready to take your recruitment efforts to the next level? Our platform offers a seamless and efficient way to get your job listings in front of top talent.</p>
        <Link to='/register'>
          <button className='bg-white text-black px-4 py-2 mt-4'>Sign Up Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Board;
