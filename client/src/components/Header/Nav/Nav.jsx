import React from 'react';

import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const { pathname, hash } = useLocation();

  return (
    <ul className="flex item-center gap-4 sm_460:gap-8 p-2">
      <Link to="/">
        <li
          className={`text-base ${
            hash === '' && pathname === '/' && 'underline'
          } dark:text-white text-black font-bold hover:underline focus-visible:underline underline-offset-8 decoration-2 cursor-pointer`}
        >
          Home
        </li>
      </Link>
      <Link to="/#shop">
        <li
          className={`text-base ${
            hash === '#shop' && 'underline'
          } dark:text-white text-black font-bold hover:underline focus-visible:underline underline-offset-8 decoration-2 cursor-pointer`}
        >
          Shop
        </li>
      </Link>
      <Link to={'#contacts'}>
        <li
          className={`text-base ${
            hash === '#contacts' && 'underline'
          } dark:text-white text-black font-bold hover:underline focus-visible:underline underline-offset-8 decoration-2 cursor-pointer`}
        >
          Contacts
        </li>
      </Link>
    </ul>
  );
};

export default Nav;
