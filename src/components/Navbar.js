import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isSignInPage = location.pathname === '/signin';

  return (
    <>
      {!isSignInPage && (
        <nav>
          <h2>
            <img className="Logo" src="/images/assets/logo.svg" alt="Logo" />
          </h2>
          <ul>
            <li>About Us</li>
            <li>Education</li>
            <li>Company</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <Link className='sign-in' to="/signin">Sign In</Link>
        </nav>
      )}
    </>
  );
}
