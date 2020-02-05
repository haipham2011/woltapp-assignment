import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import TagsContainer from './TagsContainer';
import { limitRestaurants, sortRestaurant } from './ResFunc';
import { pageConfig } from '../../config';
import PropTypes from 'prop-types';


const ResContainer = ({ restaurants, sort, page }) => {
    const { maxItemInOnePage } = pageConfig;
    const resGroup = sortRestaurant(restaurants, sort);
    const resGroupLimited = limitRestaurants(resGroup, page, maxItemInOnePage);

    const result = resGroupLimited.map((element, index) => {
      const { name, description, currency, online, delivery_price, image, tags } = element;
      const status = online ? "Online" : "Offline"
      return( 
            <Card key={index} datatest="restaurant">
            <Card.Img variant="top" src={image} datatest="image"/>
            <Card.Body>
              <Card.Title datatest="name" className="name">{name}</Card.Title>
              <Card.Text datatest="status">
                <i className={`fa fa-circle ${online ? "online" : "offline"}`}></i><span className="status"> {status}</span>
              </Card.Text>
              <Card.Text datatest="description">
                <strong>Description:</strong> {description}
              </Card.Text>
              <Card.Text datatest="delivery_price">
              <strong>Delivery price:</strong> {delivery_price/100} {currency}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <TagsContainer tags={tags}/>
            </Card.Footer>
          </Card>
      );
    })
  
    return (
      <div className="d-flex justify-content-center" datatest="ResContainer" id="restaurants">
        <CardColumns>
          {result}
        </CardColumns>
      </div>
    );
  }

  ResContainer.propType = {
    restaurants: PropTypes.arrayOf(PropTypes.shape({
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
    })),
    sort: PropTypes.string,
    page: PropTypes.number
  }

  export default ResContainer;