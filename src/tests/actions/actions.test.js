import { sortObjects } from "../../actions/actions";
import testdata from "../../data/testdata.json";
import testoutput from '../../data/testoutput.json';

const restaurantsTest = testdata.restaurants;

describe("SortObjects test", () => {
  it("Should return list of restaurant A-Z", () => {
    const restaurantSorted = sortObjects(restaurantsTest, 'name-asc');
    const expectValue = testoutput.sort['name-asc'];
    
    expect(restaurantSorted).toEqual(expectValue);
  });

  it("Should return list of restaurant Z-A", () => {
    const restaurantSorted = sortObjects(restaurantsTest, 'name-desc');
    const expectValue = testoutput.sort['name-desc'];
    
    expect(restaurantSorted).toEqual(expectValue);
  });

  it("Should return list of restaurant delivery price Low to High", () => {
    const restaurantSorted = sortObjects(restaurantsTest, 'delivery_price-asc');
    const expectValue = testoutput.sort['delivery_price-asc'];
    
    expect(restaurantSorted).toEqual(expectValue);
  });

  it("Should return list of restaurant delivery price High to Low", () => {
    const restaurantSorted = sortObjects(restaurantsTest, 'delivery_price-desc');
    const expectValue = testoutput.sort['delivery_price-desc'];
    
    expect(restaurantSorted).toEqual(expectValue);
  });
});
