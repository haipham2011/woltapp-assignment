import React from 'react';
import { Pagination } from 'react-bootstrap';
import { setPage } from '../../actions/actions';
import PropTypes from 'prop-types';


const NumberContainer = ({ dispatch, page, min, max }) => {
    const items = [];
    
    for (let number = min; number <= max; number++) {
        items.push(
            <Pagination.Item key={number} onClick={() => {dispatch(setPage(number))}} active={ page === number } datatest="number">
                {number}
            </Pagination.Item>
        );
    }
    return items;
}

NumberContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    page: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
}

export default NumberContainer;