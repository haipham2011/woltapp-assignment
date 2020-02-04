import React from 'react';
import NavbarContainer from './NavbarContainer';


const NavBar = () => {
    const navbarProps = {
      logoImg: "https://cdn-finnairshop.ecom.finnair.com/img/partners/Wolt_Logo_RGB.jpg",
      pages: [
        {
          href: "#home",
          content: "Home"
        },
        {
          href: "#restaurants",
          content: "Restaurants"
        },
        {
          href: "#download",
          content: "Download"
        },
      ]
    }

    return (
      <div className="navbarMenu fixed-top" datatest="NavBar">
        <NavbarContainer {...navbarProps}/>
      </div>
    );
}

export default NavBar;