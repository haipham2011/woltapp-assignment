import { GET_RESTAURANTS } from "../../actions/actionTypes";


export default (state = [], action) => {
    switch(action.type){
        case GET_RESTAURANTS:            
            return action.restaurants

        default:
            return state;
    }
}
