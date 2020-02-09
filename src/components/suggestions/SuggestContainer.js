import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useCarousel, useSuggest } from "./SuggestFunc";
import PropTypes from "prop-types";

const SuggestContainer = ({ restaurants }) => {
  const { index, handleSelect } = useCarousel();
  const { suggestions, suggestLocation } = useSuggest();

  useEffect(() => {
    suggestLocation(restaurants)
  }, [restaurants, suggestLocation]);

  return (
    <div id="#home" datatest="SuggestContainer">
      <Carousel activeIndex={index} onSelect={handleSelect} fade={true}>
        {suggestions.map((element, index) => {
          return (
            <Carousel.Item key={index} datatest="suggestion">
              <img
                className="d-block w-100"
                src={element.image}
                alt={`Slide ${index}`}
                datatest="img"
              />
              <Carousel.Caption>
                <h3 datatest="name">{element.name}</h3>
                <p datatest="description">{element.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

SuggestContainer.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      blurhash: PropTypes.string,
      city: PropTypes.string,
      currency: PropTypes.string,
      delivery_price: PropTypes.number,
      description: PropTypes.string,
      image: PropTypes.string,
      location: PropTypes.arrayOf(PropTypes.number),
      name: PropTypes.string,
      online: PropTypes.bool,
      tags: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default SuggestContainer;
