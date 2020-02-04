import _ from 'lodash';


export const limitRestaurants = (restaurants, page, maxItemInOnePage) => {
    let min = maxItemInOnePage*page-maxItemInOnePage;
    let max = maxItemInOnePage*page;
    let result = restaurants.slice(min ,max);
    
    return result;
  }
  
export const sortRestaurant = (restaurants, sort) => {
    let [field , type] = sort.split("-")
    let result = _.orderBy(restaurants, [field], [type])
    
    return result;
}