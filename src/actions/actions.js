import { GET_RESTAURANTS, SET_PAGE, SORT_RESTAURANTS, SET_SUGGESTION } from './actionTypes';
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

export const sortRestaurants = sort => {
    return {
        type: SORT_RESTAURANTS,
        sort
    }
}

export const setSuggestion = suggestions => {
    return {
        type: SET_SUGGESTION,
        suggestions
    }
}