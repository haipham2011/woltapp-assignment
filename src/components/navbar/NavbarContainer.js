import React from "react";
import { Navbar } from "react-bootstrap";
import LinkContainer from "./LinkContainer";
import { logoImg } from "./config";

const NavbarContainer = () => {
  const { src, alt } = logoImg;

  return (
    <Navbar datatest="NavbarContainer">
      <Navbar.Brand>
        <img alt={alt} src={src} datatest="logoImage" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <LinkContainer />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarContainer;
