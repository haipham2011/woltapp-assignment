import _ from 'lodash';


export const limitRestaurants = (restaurants, page, maxItemInOnePage) => {
    const min = maxItemInOnePage*page-maxItemInOnePage;
    const max = maxItemInOnePage*page;
    const result = restaurants.slice(min ,max);
    
    return result;
  }
  
export const sortRestaurant = (restaurants, sort) => {
    const [field , type] = sort.split("-")
    const result = _.orderBy(restaurants, [field], [type])
    
    return result;
}