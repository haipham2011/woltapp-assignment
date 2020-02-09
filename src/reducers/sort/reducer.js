import { SET_SORT } from "../../actions/actionTypes";

export default (state = "name-asc", action) => {
    switch(action.type){
        case SET_SORT:            
            return action.sort

        default:
            return state;
    }
}
