import React from 'react';
import PropTypes from 'prop-types';


const TagsContainer = ({ tags }) => {
  const result = tags.map((element, index) => {
    return(<a key={index} href={`#${element}`} datatest="tags">{`#${element} `}</a>)
  });

  return (
    <small datatest="TagsContainer">Tags: {result} </small>
  );
}

TagsContainer.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
}

export default TagsContainer;