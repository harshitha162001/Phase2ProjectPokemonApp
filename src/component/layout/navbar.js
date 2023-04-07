import React, { Component } from 'react';

const NavBar = (props) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>{props.title} </h1>
      {/* <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul> */}
    </nav>
  );
};
export default NavBar;
