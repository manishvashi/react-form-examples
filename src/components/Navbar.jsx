import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/acme.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { label: `Controlled`, url: `/about` },
    { label: `Uncontrolled`, url: `/posts` },
    { label: `Router`, url: `/contact` },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-24  mx-auto text-white'>
      {/* Logo */}

      <div className='logo'>
        <Link to='/'>
          <img src={Logo} alt='Blog Logo' />
        </Link>
      </div>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(({ url, label }, index) => (
          <li
            key={index}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to={url}>{label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='mr-1 block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-24 w-[30%] h-[calc(100%-6rem)] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[30%] duration-500 fixed top-24 bottom-0 left-[-100%]'
        }
      >
        {/* No Mobile Logo when we display the links in mobile */}

        {/* Mobile Navigation Items */}
        {navItems.map(({ url, label }, index) => (
          <li className='mt-3' key={index}>
            <Link
              className='p-1 border-b rounded-lg hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
              onClick={handleNav}
              to={url}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
