import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../Utils';
import NavbarContainer from '../../components/navbar/NavbarContainer';
import LinkContainer from '../../components/navbar/LinkContainer';


describe('NavbarContainer test', () => {
    const setUp = (props={}) => {
        const component = shallow(<NavbarContainer {...props} />);
        return component;
    }

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                logoImg: "https://example.jpg",
                pages: [
                    {
                        href: "#href1",
                        content: "content1"
                    },
                    {
                        href: "#href2",
                        content: "content2"
                    },
                ]
            };

            const propsErr = checkProps(NavbarContainer, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                logoImg: "https://example.jpg",
                pages: [
                    {
                        href: "#href1",
                        content: "content1"
                    },
                    {
                        href: "#href2",
                        content: "content2"
                    },
                ]
            }
            component = setUp(props);
        });

        it('Should render NavbarContainer', () => {
            const wrapper = findByTestAtrr(component, "NavbarContainer");
            expect(wrapper.length).toBe(1);
        })

        it('Should render a logo image', () => {
            const wrapper = findByTestAtrr(component, "logoImg");
            expect(wrapper.length).toBe(1);
        })
    });
})

describe('LinkContainer test', () => {
    const setUp = (props={}) => {
        const component = shallow(<LinkContainer {...props} />);
        return component;
    }

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                logoImg: "https://example.jpg",
                pages: [
                    {
                        href: "#href1",
                        content: "content1"
                    },
                    {
                        href: "#href2",
                        content: "content2"
                    },
                ]
            };

            const propsErr = checkProps(LinkContainer, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                logoImg: "https://example.jpg",
                pages: [
                    {
                        href: "#href1",
                        content: "content1"
                    },
                    {
                        href: "#href2",
                        content: "content2"
                    },
                ]
            }
            component = setUp(props);
        });

        it('Should render a list of link', () => {
            const wrapper = findByTestAtrr(component, "link");
            expect(wrapper.length).toBe(2);
        })

        it('Should render LinkContainer', () => {
            const wrapper = findByTestAtrr(component, "LinkContainer");
            expect(wrapper.length).toBe(1);
        })
    });
})
