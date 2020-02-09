import { useState } from 'react';
import { setPage } from '../../actions/actions';
import { pageConfig } from '../../config';


export const createMapArr = (min, max, fn) => {
    const newArray = [];
    for(let i = min; i <= max; i++){
        newArray.push(
            fn(i)
        )
    };

    return newArray
}

export const pageNumCal = (total, range) => {
    const amount = total % range === 0 ? total/range : parseInt(total/range) + 1;
    
    return amount
}

export const pageRangeCal = (page, maxNumberInOnePage, pageGroup, pageAmount) => {    
    const rangePage = createMapArr(1,pageGroup, index => {
        const range = maxNumberInOnePage -1;
        const min = maxNumberInOnePage*index-range;
        const max = min + range  >= pageAmount ? pageAmount : min + range;
        return [min, max]
    }).filter(pageRange => {
        return page <= pageRange[1] && page >= pageRange[0];
    })[0];

    return rangePage;
}

export const usePageBound = (pageAmount, pageGroup) => {
    const { maxNumberInOnePage } = pageConfig;
    const [bound, setBound] = useState([1,maxNumberInOnePage]);

    const changePage = (dispatch, page, type) => {
        let newPage;

        if (type === "next"){
            newPage = page+1;
        }
        else if (type === "prev"){
            newPage = page-1;
        }
        else if (type === "first"){
            newPage = 1
        }
        else {
            newPage = pageAmount
        }
    
        dispatch(setPage(newPage));
        setBound(pageRangeCal(newPage, maxNumberInOnePage, pageGroup, pageAmount));
    }

    return {bound, changePage}
}