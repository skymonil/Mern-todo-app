import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">Navbar</a>
        <b>TODO</b>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className='nav-item'>
              <a className='nav-link active' aria-current="page" href='#'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>About Us</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Sign Up</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Sign In</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <img className='img-fluid user-png' src='your-image-path.jpg' alt='User' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;