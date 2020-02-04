import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageConfig } from '../../config';
import PagesControlContainer from './PageControlContainer';
import { pageNumCal } from './PageControlFunc';


const PagesController = () => {
    const { restaurants, page, pageBoundary } = useSelector(state => state);
    
    const dispatch = useDispatch();
    const { maxItemInOnePage } = pageConfig;
    const resAmount = restaurants.length;
    const pageAmount = pageNumCal(resAmount, maxItemInOnePage);
    const pageControlProps = {
        dispatch, 
        page, 
        pageBoundary,  
        pageAmount
    };

    return(
        <div className="pageController" datatest="PagesController">
            <PagesControlContainer {...pageControlProps} />
        </div> 
    );
}

export default PagesController;