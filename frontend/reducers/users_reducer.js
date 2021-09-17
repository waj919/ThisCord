import { RECEIVE_CURRENT_USER} from "../actions/session_actions";
import {RECEIVE_USERS} from "../actions/user_actions"

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser ;
            return nextState
        case RECEIVE_USERS:
            return action.users
        default:
            return state;
    }
      
}
      
export default usersReducer;