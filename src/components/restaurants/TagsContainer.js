import React from "react";
import PropTypes from "prop-types";

const TagsContainer = ({ tags }) => {
  return (
    <small datatest="TagsContainer">
      {tags.map((element, index) => {
        return (
          <a
            key={index}
            href={`#${element}`}
            datatest="tags"
          >{`#${element} `}</a>
        );
      })}{" "}
    </small>
  );
};

TagsContainer.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default TagsContainer;
