import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../Utils';
import { createMapArr, pageNumCal, pageRangeCal, usePageBound } from '../../components/pagecontroller/PageControlFunc';
import NumberContainer from '../../components/pagecontroller/NumberContainer';
import PageControlContainer from '../../components/pagecontroller/PageControlContainer';
import { act, renderHook } from '@testing-library/react-hooks';


describe('PageControlFunc test', () => {
    const resNumber = 50;
    const maxItemInOnePage = 8;
    const maxNumberInOnePage = 5;
    const pageAmount = pageNumCal(resNumber, maxItemInOnePage);

    describe('pageNumCal test', () => {
        it('Should return correct number of page', () => {
            expect(pageAmount).toEqual(7);
        })
    })

    describe('createMapArr test', () => {
        it('Should return correct array', () => {
            const arr = createMapArr(1,5, item => item)
            expect(arr).toEqual([1,2,3,4,5]);
        })
    })

    describe('pageRangeCal test', () => {
        it('Should return correct array of page range', () => {
            const page = 4;
            const pageRange = pageRangeCal(page, maxNumberInOnePage, pageAmount)
            expect(pageRange).toEqual([1, 5]);
        })
    })

    describe('changePage test', () => {
        it('Should return current page correctly', () => {
            const { result } = renderHook(() => usePageBound(pageAmount, maxNumberInOnePage));
            const dispatch = jest.fn();

            act(() => {
                result.current.changePage(dispatch, 2, "prev");
            })

            expect(result.current.bound).toEqual([1,5]);
        })
    })
})

describe('NumberContainer test', () => {
    const setUp = (props={}) => {
        const component = shallow(<NumberContainer {...props} />);
        return component;
    }

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                dispatch: jest.fn(),
                page: 1,
                min: 1,
                max: 5
            };

            const propsErr = checkProps(NumberContainer, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {
        const props = {
            dispatch: jest.fn(),
            page: 1,
            min: 1,
            max: 5
        };
        const component = setUp(props);
        
        it('Should render lists of number', () => {
            const wrapper = findByTestAtrr(component, "number");
            expect(wrapper.length).toBe(5);
        })
    });
})

describe('PageControlContainer test', () => {
    const setUp = (props={}) => {
        const component = shallow(<PageControlContainer {...props} />);
        return component;
    }

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                dispatch: jest.fn(),
                page: 1, 
                resAmount: 50
            };

            const propsErr = checkProps(PageControlContainer, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {
        const props = {
            dispatch: jest.fn(),
            page: 1, 
            resAmount: 50
        };
        const component = setUp(props);
        
        it('Should render NumberContainer', () => {
            const wrapper = findByTestAtrr(component, "NumberContainer");
            expect(wrapper.length).toBe(1);
        })

        it('Should render PageControlContainer', () => {
            const wrapper = findByTestAtrr(component, "PageControlContainer");
            expect(wrapper.length).toBe(1);
        })
    });
})
