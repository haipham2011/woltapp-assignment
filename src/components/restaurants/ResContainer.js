import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import TagsContainer from "./TagsContainer";
import { limitRestaurants } from "./ResFunc";
import { sortObjects } from "../../actions/actions";
import { pageConfig } from "../../config";
import PropTypes from "prop-types";

const ResContainer = ({ restaurants, sort, page }) => {
  const { maxItemInOnePage } = pageConfig;
  const resGroup = sortObjects(restaurants, sort);
  const resGroupLimited = limitRestaurants(resGroup, page, maxItemInOnePage);

  return (
    <div
      className="d-flex justify-content-center"
      datatest="ResContainer"
      id="restaurants"
    >
      <CardColumns>
        {resGroupLimited.map((element, index) => {
          const {
            name,
            description,
            currency,
            online,
            delivery_price,
            image,
            tags
          } = element;
          const status = online ? "Online" : "Offline";
          
          return (
            <Card key={index} datatest="restaurant">
              <Card.Img variant="top" src={image} datatest="image" />
              <Card.Body>
                <Card.Title datatest="name" className="name">
                  {name}
                </Card.Title>
                <Card.Text datatest="status">
                  <i
                    className={`fa fa-circle ${online ? "online" : "offline"}`}
                  ></i>
                  <span className="status"> {status}</span>
                </Card.Text>
                <Card.Text datatest="description" className="">{description}</Card.Text>
                <Card.Text datatest="delivery_price">
                  {delivery_price / 100} {currency}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <TagsContainer tags={tags} />
              </Card.Footer>
            </Card>
          );
        })}
      </CardColumns>
    </div>
  );
};

ResContainer.propType = {
  restaurants: PropTypes.arrayOf(
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
  ),
  sort: PropTypes.string,
  page: PropTypes.number
};

export default ResContainer;
