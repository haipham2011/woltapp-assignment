import checkPropTypes from 'check-prop-types';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[datatest='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}
