import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../Utils';
import { degToRad, getDistance, useCarousel } from '../../components/suggestions/SuggestFunc';
import SuggestContainer from '../../components/suggestions/SuggestContainer';
import testdata from '../../data/testdata.json';
import { act, renderHook } from '@testing-library/react-hooks';

const suggestionsTest = testdata.restaurants.slice(0,3);

describe('SuggestFunc test', () => {
    describe('degToRad test', () => {
        it('Should convert from dedree to radian', () => {
            const expectedValue = 1.05;
            const ouput = Math.round( degToRad(60) * 100 ) / 100;
            expect(ouput).toEqual(expectedValue);
        })
    })

    describe('getDistance test', () => {
        it('Should return correct distance', () => {
            const expectedValue = 15.7;
            const firstPoint = {
                lat: 60.20408020000001,
                lon: 24.6657975
            }

            const secondPoint = {
                lat: suggestionsTest[0].location[1],
                lon: suggestionsTest[0].location[0]
            }
            const ouput = Math.round( getDistance(firstPoint, secondPoint) * 100 ) / 100;
            expect(ouput).toEqual(expectedValue);
        })
    })

    describe('useCarousel test', () => {
        it('Should return correct page carousel', () => {
            const { result } = renderHook(() => useCarousel());

            act(() => {
                result.current.handleSelect(1);
            })

            expect(result.current.index).toEqual(1);
        })
    })
})

describe('SuggestContainer test', () => {
    const setUp = (props={}) => {
        const component = shallow(<SuggestContainer {...props} />);
        return component;
    }

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                suggestions: suggestionsTest
            };

            const propsErr = checkProps(SuggestContainer, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                suggestions: suggestionsTest
            };
            component = setUp(props);
        });

        it('Should render lists of suggestion', () => {
            const wrapper = findByTestAtrr(component, "suggestion");
            expect(wrapper.length).toBe(3);
        })

        it('Should render image', () => {
            const wrapper = findByTestAtrr(component, "img");
            expect(wrapper.length).toBe(3);
        })

        it('Should render name', () => {
            const wrapper = findByTestAtrr(component, "name");
            expect(wrapper.length).toBe(3);
        })

        it('Should render description', () => {
            const wrapper = findByTestAtrr(component, "description");
            expect(wrapper.length).toBe(3);
        })

        it('Should render SuggestContainer', () => {
            const wrapper = findByTestAtrr(component, "SuggestContainer");
            expect(wrapper.length).toBe(1);
        })
    });
})


