import { RECEIVE_DM_MESSAGES, RECEIVE_DM_MESSAGE, REMOVE_DM_MESSAGE } from "../actions/dm_message_actions";


const dmMessageReducer = (state = {}, action ) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)

    switch (action.type){
        case RECEIVE_DM_MESSAGES:
            return action.dmMessages;
        case RECEIVE_DM_MESSAGE:
            nextState[action.dmMessage.id] = action.dmMessage
            return nextState;
        case REMOVE_DM_MESSAGE:
            delete nextState[action.dmMessage.id]
        default:
            return state;
    }
}

export default dmMessageReducer
