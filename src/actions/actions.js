import { GET_RESTAURANTS, SET_PAGE, SET_SORT } from './actionTypes';
import data from '../data/restaurants.json';
 
export const getRestaurants = () => {
    const restaurants = data.restaurants;
    return {
        type: GET_RESTAURANTS,
        restaurants
    }
}

export const setPage = page => {
    return {
        type: SET_PAGE,
        page
    }
}

export const setSort = sort => {
    return {
        type: SET_SORT,
        sort
    }
}

  
export const sortObjects = (objects, sort) => {
    //field : Name or Price
    //type: ascending or descending
    const [field , type] = sort.split("-");
    console.log(field, type);
    
    const compare = (a,b) => {
      if( type === 'asc'){
        return (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0) 
      }
      else {
        return (a[field] > b[field]) ? -1 : ((b[field] > a[field]) ? 1 : 0)
      }
    };

    return objects.sort(compare);
}
