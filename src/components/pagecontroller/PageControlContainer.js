import React from 'react';
import { Pagination } from 'react-bootstrap';
import { usePageBound } from './PageControlFunc';
import NumberContainer from './NumberContainer';
import PropTypes from 'prop-types';


const PagesControlContainer = props => {
    const { dispatch, page, pageAmount } = props;
    let { bound, changePage } = usePageBound(pageAmount);
    let [min, max] = bound;    
    let numberContainerProps = {
        dispatch, 
        page, 
        min, 
        max
    }
    
    return(
        <Pagination className="d-flex justify-content-center" datatest="PageControlContainer">
            <Pagination.First disabled={page === 1} onClick={() => changePage(dispatch, page, "first")}/>
            <Pagination.Prev disabled={page === 1}  onClick={() => changePage(dispatch, page, "prev")}/>
                <NumberContainer {...numberContainerProps} datatest="NumberContainer"/> 
            <Pagination.Next disabled={page === pageAmount} onClick={() => changePage(dispatch, page, "next")}/>
            <Pagination.Last disabled={page === pageAmount} onClick={() => changePage(dispatch, page, "last")}/>
        </Pagination>
    );
}

PagesControlContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    page: PropTypes.number,
    pageBoundary: PropTypes.arrayOf(PropTypes.number),
    pageAmount: PropTypes.number
}

export default PagesControlContainer;