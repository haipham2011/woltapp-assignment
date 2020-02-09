export const limitRestaurants = (restaurants, page, maxItemInOnePage) => {
    const min = maxItemInOnePage*page-maxItemInOnePage;
    const max = maxItemInOnePage*page;
    const result = restaurants.slice(min ,max);
    
    return result;
}
