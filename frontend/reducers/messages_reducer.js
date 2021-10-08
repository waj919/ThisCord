import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE } from "../actions/message_actions";

const messageReducer = (state= {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign( {}, state); 

    switch (action.type) {
        case RECEIVE_MESSAGES:
            return action.messages;
        case RECEIVE_MESSAGE:

            nextState[action.message.id] = action.message;
            return nextState;
        case REMOVE_MESSAGE: 
        debugger
            delete nextState[action.message]
            return nextState;
        default:
            return state;
    }

}

export default messageReducer;