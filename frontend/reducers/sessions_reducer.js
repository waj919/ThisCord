import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const sessionReducer = (state = {currentUser: null}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState.currentUser = action.currentUser
            return nextState
        case LOGOUT_CURRENT_USER:
            nextState.currentUser = null;
            return nextState
        default:
            return state;
    }
}


export default sessionReducer;