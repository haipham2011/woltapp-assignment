import React from 'react';
import { Navbar } from 'react-bootstrap';
import LinkContainer from './LinkContainer';
import PropTypes from 'prop-types';


const NavbarContainer = props => {
  const { logoImg } = props;

  return (
      <Navbar datatest="NavbarContainer">
      <Navbar.Brand >
        <img
          alt=""
          src={logoImg}
          datatest="logoImg"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <LinkContainer {...props} />
      </Navbar.Collapse>
    </Navbar>
  );
}

NavbarContainer.propTypes = {
    logoImg: PropTypes.string
}

export default NavbarContainer;