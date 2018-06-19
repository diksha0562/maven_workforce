import {GET_POSTS} from '../action/index';
function posts(state={}, action){
    switch(action.type){
        case GET_POSTS : 
        console.log('==========',action.payload)
        return action.payload;
        default: 
        return state
    }
}

export default posts;