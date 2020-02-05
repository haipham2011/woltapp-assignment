import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../Utils';
import { limitRestaurants, sortRestaurant } from '../../components/restaurants/ResFunc';
import ResContainer from '../../components/restaurants/ResContainer';
import TagsContainer from '../../components/restaurants/TagsContainer';
import testoutput from '../../data/testoutput.json';
import testdata from '../../data/testdata.json';

const restaurantsTest = testdata.restaurants;

describe('ResFunc test', () => {


    describe('sortRestaurant test', () => {

        it('Should return list of restaurant A-Z', () => {
            const output = sortRestaurant(restaurantsTest, "name-asc");
            const expectValue = testoutput.sort["name-asc"]
            expect(output).toEqual(expectValue);
        })

        it('Should return list of restaurant Z-A', () => {
            const output = sortRestaurant(restaurantsTest, "name-desc");
            const expectValue = testoutput.sort["name-desc"]
            expect(output).toEqual(expectValue);
        })

        it('Should return list of restaurant price ascending', () => {
            const output = sortRestaurant(restaurantsTest, "delivery_price-asc");
            const expectValue = testoutput.sort["delivery_price-asc"]
            expect(output).toEqual(expectValue);
        })

        it('Should return list of restaurant price descending', () => {
            const output = sortRestaurant(restaurantsTest, "delivery_price-desc");
            const expectValue = testoutput.sort["delivery_price-desc"]
            expect(output).toEqual(expectValue);
        })
    })

    describe('limitRestaurants test', () => {
        const page = 2;
        const maxItemInOnePage = 4;
        const sortType = "name-asc";

        it('Should return list of restaurant A-Z and correct length', () => {
            const restaurantSorted = sortRestaurant(restaurantsTest, sortType);
            const output = limitRestaurants(restaurantSorted, page, maxItemInOnePage);
            const expectValue = testoutput.limit[sortType]
            expect(output).toEqual(expectValue);
        })
    })
})

describe('TagsContainer test', () => {
    const setUp = (props={}) => {
        const component = shallow(<TagsContainer {...props} />);
        return component;
    }

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                tags: ["#tag1", "#tag2"]
            };

            const propsErr = checkProps(TagsContainer, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {
        const props = {
            tags: ["#tag1", "#tag2"]
        };
        const component = setUp(props);

        it('Should render lists of tags', () => {
            const wrapper = findByTestAtrr(component, "tags");
            expect(wrapper.length).toBe(2);
        })

        it('Should render TagsContainer', () => {
            const wrapper = findByTestAtrr(component, "TagsContainer");
            expect(wrapper.length).toBe(1);
        })
    });
})

describe('ResContainer test', () => {
    const setUp = (props={}) => {
        const component = shallow(<ResContainer {...props} />);
        return component;
    }

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                restaurants: restaurantsTest,
                sort: "name-asc",
                page: 2
            };

            const propsErr = checkProps(ResContainer, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {
        const props = {
            restaurants: restaurantsTest,
            sort: "name-asc",
            page: 2
        };
        const component = setUp(props);
        
        it('Should render ResContainer', () => {
            const wrapper = findByTestAtrr(component, "ResContainer");
            expect(wrapper.length).toBe(1);
        })

        it('Should render restaurant', () => {
            const wrapper = findByTestAtrr(component, "restaurant");
            expect(wrapper.length).toBe(5);
        })

        it('Should render name', () => {
            const wrapper = findByTestAtrr(component, "name");
            expect(wrapper.length).toBe(5);
        })

        it('Should render description', () => {
            const wrapper = findByTestAtrr(component, "description");
            expect(wrapper.length).toBe(5);
        })

        it('Should render delivery_price', () => {
            const wrapper = findByTestAtrr(component, "delivery_price");
            expect(wrapper.length).toBe(5);
        })

        it('Should render status', () => {
            const wrapper = findByTestAtrr(component, "status");
            expect(wrapper.length).toBe(5);
        })

        it('Should render image', () => {
            const wrapper = findByTestAtrr(component, "image");
            expect(wrapper.length).toBe(5);
        })
    });
})

