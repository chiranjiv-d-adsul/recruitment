import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close the menu after clicking on a link
  };

  return (
    <header className='bg-gray-800 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-xl font-bold flex items-center gap-2'>
          <img src="/Group.svg" alt="Logo" className="h-8" />
          <h2>recruits</h2>
        </div>
        <button className='lg:hidden' onClick={toggleMenu}>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex lg:flex-row lg:space-x-4 mt-0 lg:mt-0 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <Link to='/' className='px-2 py-1'>Home</Link>
          <button onClick={() => scrollToSection('features')} className='px-2 py-1'>Features</button>
          <button onClick={() => scrollToSection('benefits')} className='px-2 py-1'>Benefits</button>
          <Link to='/login' className='px-2 py-1'>Login</Link>
          <Link to='/register' className='px-2 py-1'>Register</Link>
        </nav>

        {/* Mobile Navigation */}

      </div>
      <nav className={`lg:hidden flex-col space-y-2 mt-4 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <button>  <Link to='/' className='px-2 py-1 block' onClick={toggleMenu}>Home</Link></button>
          <button onClick={() => { scrollToSection('features'); toggleMenu(); }} className='px-2 py-1 block'>Features</button>
          <button onClick={() => { scrollToSection('benefits'); toggleMenu(); }} className='px-2 py-1 block'>Benefits</button>
      <button>   <Link to='/login' className='px-2 py-1 block' onClick={toggleMenu}>Login</Link></button>
       <button> <Link to='/register' className='px-2 py-1 block' onClick={toggleMenu}>Register</Link></button>
        </nav>
    </header>
  );
};

export default Header;
