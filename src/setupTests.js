import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})

global.console.warn = (message) => {
    throw message
}
  
global.console.error = (message) => {
    throw message
}

const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn()
};
  
global.navigator.geolocation = mockGeolocation;