import { SORT_RESTAURANTS } from "../../actions/actionTypes";

export default (state = "name-asc", action) => {
    switch(action.type){
        case SORT_RESTAURANTS:            
            return action.sort

        default:
            return state;
    }
}
