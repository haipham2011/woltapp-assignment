import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PagesControlContainer from './PageControlContainer';


const PagesController = () => {
    const { restaurants, page } = useSelector(state => state);
    const dispatch = useDispatch();
    const resAmount = restaurants.length;

    return(
        <div className="pageController" datatest="PagesController">
            <PagesControlContainer {...{ dispatch, page, resAmount }} />
        </div> 
    );
}

export default PagesController;