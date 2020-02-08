import React from "react";
import { Nav } from "react-bootstrap";
import { pages } from "./config";

const LinkContainer = () => {
  return (
    <Nav datatest="LinkContainer">
      {pages.map((element, index) => {
        const { href, content } = element;
        return (
          <Nav.Link key={index} href={href} datatest="link">
            {content}
          </Nav.Link>
        );
      })}
    </Nav>
  );
};

export default LinkContainer;
