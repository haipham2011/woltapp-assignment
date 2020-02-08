import React from 'react';
import { Form } from 'react-bootstrap';
import OptionContainer from './OptionContainer';
import PropTypes from 'prop-types';


const SortContainer = ({ dispatch, sort }) => {
    const optionProps = {
        dispatch,
        sort
    }

    return(
        <div className="d-flex justify-content-end" datatest="SortContainer">
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <OptionContainer {...optionProps} />
                </Form.Group>
            </Form>
        </div>
        
    );
}

SortContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    sort: PropTypes.string
}

export default SortContainer;