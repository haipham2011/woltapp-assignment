import React from 'react';
import NavbarContainer from './NavbarContainer';
import './style.css';

const NavBar = () => {
    return (
      <div className="navbarMenu fixed-top" datatest="NavBar">
        <NavbarContainer />
      </div>
    );
}

export default NavBar;