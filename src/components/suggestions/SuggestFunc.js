import { useState } from 'react';
import { sortObjects } from '../../actions/actions';

export const degToRad = deg => {
    return deg * (Math.PI/180);
}
  
export const getDistance = (firstPos, secondPos) => {
    const earthRadius = 6371; 
    const dLat = degToRad(secondPos.lat-firstPos.lat); 
    const dLon = degToRad(secondPos.lon-firstPos.lon); 
    const a = Math.pow(Math.sin(dLat/2), 2) + Math.cos(degToRad(firstPos.lat)) * Math.cos(degToRad(secondPos.lat)) * Math.pow(Math.sin(dLon/2), 2); 
    const c = Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = 2 * earthRadius * c; 
  
    return distance;
}

export const useSuggest = () => {
  const [suggestions, setSuggestion] = useState([]);

  const suggestLocation = restaurants => {
    navigator.geolocation.getCurrentPosition(position => {
      const currentPos = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };   
      
      const dataIncludeDis = restaurants.map(element => {
        const restaurantPos = {
          lat: element.location[1],
          lon: element.location[0]
        };
  
        element['distance'] = getDistance(currentPos, restaurantPos);
        return element;
      });    
      const dataSorted = sortObjects(dataIncludeDis, 'distance-asc');
      
      setSuggestion(dataSorted.slice(0,3));
    });
  }

  return { suggestions, suggestLocation }
}

export const useCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = selectedIndex => {            
        setIndex(selectedIndex);
    };

    return { index, handleSelect };
}