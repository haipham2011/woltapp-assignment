import { useState } from 'react';
import { setPage } from '../../actions/actions';
import { pageConfig } from '../../config';


export const pageNumCal = (total, range) => {
    let amount;

    if(total % range === 0){
        amount = total/range;
    }
    else {
        amount = parseInt(total/range) + 1;
    }

    return amount
}

export const pageRangeCal = (page, maxNumberInOnePage, pageGroup, pageAmount) => {    
    for(let i = 1; i <= pageGroup; i++){
        const max = maxNumberInOnePage >= pageAmount ? pageAmount : i*maxNumberInOnePage;
        const range = maxNumberInOnePage >= pageAmount ? pageAmount : maxNumberInOnePage;
        const min = max-range+1;

        if(max >= page){
            if(max >= pageAmount){
                return [min, pageAmount]
            }
            return [min, max]
        }
    }
}

export const usePageBound = pageAmount => {
    const { maxNumberInOnePage } = pageConfig;
    const pageGroup = pageNumCal(pageAmount, maxNumberInOnePage);
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