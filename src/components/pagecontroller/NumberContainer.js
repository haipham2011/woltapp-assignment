import React from 'react';
import { Pagination } from 'react-bootstrap';
import { setPage } from '../../actions/actions';
import PropTypes from 'prop-types';
import { createMapArr } from './PageControlFunc';


const NumberContainer = ({ dispatch, page, min, max }) => {
    return createMapArr(min, max, index => {
        return(
            <Pagination.Item key={index} onClick={() => {dispatch(setPage(index))}} active={ page === index } datatest="number">
                {index}
            </Pagination.Item>
        );
    });
}

NumberContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    page: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
}

export default NumberContainer;