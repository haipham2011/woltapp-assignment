import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SortContainer from './SortContainer';

const SortController = () => {
    const dispatch = useDispatch();
    const { sort } = useSelector(state => state);
    const sortControlProps = {
        dispatch,
        sort
    }  

    return(
        <div className="sortController" datatest="SortController">
            <SortContainer {...sortControlProps}/>
        </div>
    );

}

export default SortController;