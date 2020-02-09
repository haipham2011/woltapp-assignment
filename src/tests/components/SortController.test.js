import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../Utils';
import OptionContainer from '../../components/sortcontroller/OptionContainer';
import SortContainer from '../../components/sortcontroller/SortContainer';

describe('OptionContainer test', () => {
    const setUp = (props={}) => {
        const component = shallow(<OptionContainer {...props} />);
        return component;
    }

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                dispatch: jest.fn(),
                sort: "name-asc"
            };

            const propsErr = checkProps(OptionContainer, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {
        const props = {
            dispatch: jest.fn(),
            sort: "name-asc"
        };
        const component = setUp(props);

        it('Should render lists of option', () => {
            const wrapper = findByTestAtrr(component, "option");
            expect(wrapper.length).toBe(4);
        })

        it('Should render OptionContainer', () => {
            const wrapper = findByTestAtrr(component, "OptionContainer");
            expect(wrapper.length).toBe(1);
        })
    });
})

describe('SortContainer test', () => {
    const setUp = (props={}) => {
        const component = shallow(<SortContainer {...props} />);
        return component;
    }

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                dispatch: jest.fn(),
                sort: "name-asc"
            };

            const propsErr = checkProps(SortContainer, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {
        const props = {
            dispatch: jest.fn(),
            sort: "name-asc"
        };
        const component = setUp(props);

        it('Should render lists of option', () => {
            const wrapper = findByTestAtrr(component, "SortContainer");
            expect(wrapper.length).toBe(1);
        })
    });
})
