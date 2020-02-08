import React from 'react';
import { mount } from 'enzyme';
import { findByTestAtrr } from '../Utils';
import configureMockStore from 'redux-mock-store'
import PagesController from '../../components/pagecontroller';
import Restaurants from '../../components/restaurants';
import NavBar from '../../components/navbar';
import Suggestions from '../../components/suggestions';
import Footer from '../../components/footer';
import { Provider } from 'react-redux';
import testdata from '../../data/testdata.json';


const restaurantsTest = testdata.restaurants;
const suggestionsTest = restaurantsTest.slice(0,3);

const setUp = (initialState={}) => {
    const mockStore = configureMockStore();
    const store = mockStore(initialState);
    const component = mount(
    <Provider store={store}>
        <NavBar />
        <Suggestions />
        <Restaurants />
        <PagesController />
        <Footer />
    </Provider>);

    return component;
};

describe('App test', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Should render without errors', () => {
        const initialState = {
            restaurants: restaurantsTest,
            sort: "name-asc",
            page: 1,
            suggestions: suggestionsTest,
        }

        const component = setUp(initialState);
        
        it('Should render NavBar', () => {
            const wrapper = findByTestAtrr(component, "NavBar");
            expect(wrapper.length).toBe(1);
        })

        it('Should render Suggestions', () => {
            const wrapper = findByTestAtrr(component, "Suggestions");
        expect(wrapper.length).toBe(1);
        })

        it('Should render Restaurants', () => {
            const wrapper = findByTestAtrr(component, "Restaurants");
            expect(wrapper.length).toBe(1);
        })

        it('Should render PageController', () => {
            const wrapper = findByTestAtrr(component, "PagesController");
            expect(wrapper.length).toBe(1);
        })

        it('Should render Footer', () => {
            const wrapper = findByTestAtrr(component, "Footer");
            expect(wrapper.length).toBe(1);
        })
    })
})
