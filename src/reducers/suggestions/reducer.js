import { SET_SUGGESTION } from "../../actions/actionTypes";


export default (state = [], action) => {
    switch(action.type){
        case SET_SUGGESTION:            
            return action.suggestions
        default:
            return state;
    }
}
