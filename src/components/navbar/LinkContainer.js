import React from "react";
import { Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const LinkContainer = ({ pages }) => {
  return (
    <Nav datatest="LinkContainer">
      {pages.map((element, index) => {
        return (
          <Nav.Link key={index} href={element.href} datatest="link">
            {element.content}
          </Nav.Link>
        );
      })}
    </Nav>
  );
};

LinkContainer.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      content: PropTypes.string
    })
  )
};

export default LinkContainer;
