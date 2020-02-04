import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants } from '../../actions/actions';
import SortController from '../sortcontroller';
import ResContainer from './ResContainer';


const Restaurants = () => {  
  const { restaurants, sort, page } = useSelector(state => state);
  const dispatch = useDispatch();
  const restaurantsProps = {
    restaurants, 
    sort, 
    page  
  }

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch])

  return (
      <div className="restaurants" datatest="Restaurants">
        <div className="d-flex justify-content-center">
          <h3>
            Explore your choices
          </h3>
        </div>
        <SortController />
        <ResContainer {...restaurantsProps}/>
      </div>
  );
}

export default Restaurants;
