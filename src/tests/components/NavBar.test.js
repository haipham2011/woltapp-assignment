import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../Utils';
import NavbarContainer from '../../components/navbar/NavbarContainer';
import LinkContainer from '../../components/navbar/LinkContainer';


describe('NavbarContainer test', () => {
    const setUp = () => {
        const component = shallow(<NavbarContainer />);
        return component;
    }
    const component = setUp();

    it('Should render NavbarContainer', () => {
        const wrapper = findByTestAtrr(component, "NavbarContainer");
        expect(wrapper.length).toBe(1);
    })

    it('Should render a logo image', () => {
        const wrapper = findByTestAtrr(component, "logoImg");
        expect(wrapper.length).toBe(1);
    })
})

describe('LinkContainer test', () => {
    const setUp = () => {
        const component = shallow(<LinkContainer />);
        return component;
    }

    const component = setUp();
    
    it('Should render a list of link', () => {
        const wrapper = findByTestAtrr(component, "link");
        expect(wrapper.length).toBe(3);
    })

    it('Should render LinkContainer', () => {
        const wrapper = findByTestAtrr(component, "LinkContainer");
        expect(wrapper.length).toBe(1);
    })
})
