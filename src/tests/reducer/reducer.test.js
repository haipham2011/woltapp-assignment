import {
  GET_RESTAURANTS,
  SET_PAGE,
  SET_SORT
} from "../../actions/actionTypes";
import reducer from "../../reducers";
import testdata from "../../data/testdata.json";


describe("reducer", () => {
  const restaurantsTest = testdata.restaurants;
  
  it("Should return default state", () => {
    const expectedState = {
        page: 1,
        restaurants: [],
        sort: "name-asc",
        suggestions: []
    };

    const newState = reducer(undefined, {});
    expect(newState).toEqual(expectedState);
  });

  it('Should return new state if change the number of restaurants', () => {
    const expectedState = {
        page: 1,
        restaurants: restaurantsTest,
        sort: "name-asc",
        suggestions: []
    };

    const newState = reducer(undefined, {
          type: GET_RESTAURANTS,
          restaurants: restaurantsTest
      });
    expect(newState).toEqual(expectedState);
  })

  it('Should return new state if change page', () => {
    const expectedState = {
        page: 2,
        restaurants: [],
        sort: "name-asc",
        suggestions: []
    };

    const newState = reducer(undefined, {
          type: SET_PAGE,
          page: 2
      });
    expect(newState).toEqual(expectedState);
  })

  it('Should return new state if change sort type', () => {
    const expectedState = {
        page: 1,
        restaurants: [],
        sort: "name-desc",
        suggestions: []
    };

    const newState = reducer(undefined, {
          type: SET_SORT,
          sort: "name-desc"
      });
    expect(newState).toEqual(expectedState);
  })
});
