import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../Utils';
import FooterContainer from '../../components/footer/FooterContainer';


describe('FooterContainer test', () => {
    const setUp = (props={}) => {
        const component = shallow(<FooterContainer {...props} />);
        return component;
    }

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                downloadImg: {
                    ios: "https://example-ios.com",
                    android: "https://example-android.com"
                }
            };

            const propsErr = checkProps(FooterContainer, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {
        const props = {
            downloadImg: {
                ios: "https://example-ios.com",
                android: "https://example-android.com"
            }
        };
        const component = setUp(props);

        it('Should render without errors', () => {
            const wrapper = findByTestAtrr(component, "FooterContainer");
            expect(wrapper.length).toBe(1);
        })

        it('Should render a image IOS', () => {
            const wrapper = findByTestAtrr(component, "ios");
            expect(wrapper.length).toBe(1);
        })

        it('Should render a image Android', () => {
            const wrapper = findByTestAtrr(component, "android");
            expect(wrapper.length).toBe(1);
        })
    });

})
