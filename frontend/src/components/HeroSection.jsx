import React from 'react';

const HeroSection = () => (
  // <section className='bg-blue-600 text-white py-20 h-[656px]'>
  //   <div className='grid row-5'>

  //   <div className='container mx-auto text-center col-span-3'>
  //     <h1 className='text-5xl font-bold mb-4'>Streamline Your Recruitment Process</h1>
  //     <p className='text-xl mb-8'>Efficient hiring solutions for modern businesses.</p>
  //     <button className='bg-white text-blue-600 py-2 px-4 rounded'>Get Started</button>
  //     <button className='bg-transparent border border-white text-white py-2 px-4 ml-4 rounded'>Learn More</button>
  //   </div>
  //   <div className='col-span-2'>
  //     <img src='/img_carriere 1.png' alt='Hero' className='w-[547px] h-[656px] object-cover' />
  //   </div>
  //   </div>
  <section className='bg-[#D8D1FF] text-white'>
    <div className='bg-[#D4CDFF] grid grid-cols-5'>
      <div className='col-span-3   mx-auto text-center py-[40px] ml-[80px]  md:py-[80px]'>
      <h1 className='md:text-6xl text-4xl  font-bold mb-6'>Streamline Your Recruitment Process</h1>
       <p className='md:text-2xl text-xl mb-6'>Efficient hiring solutions for modern businesses.</p>
       <p className='md:text-xl  text-l mb-4 text-justify'>Discover a platform tailored for passionate job seekers interested in startups. Find your next career opportunity and connect with like-minded individuals. </p>
       <div className='flex gap-2 ml-4'>

      <button className='bg-white text-blue-600 md:py-2 md:px-4 px-1 py-2 rounded'>Get Started</button>
       <button className='bg-transparent border border-white text-white md:py-2 md:px-4 py-2  px-1 rounded hover:bg-[white] hover:text-blue-600'>Learn More</button>
       </div>
      </div>
      <div className='hidden md:block col-span-2'>
      <img src='/img_carriere 1.png' alt='Hero' className='w-full h-full object-cover' />
      </div>
    </div>
  </section>
);

export default HeroSection;
