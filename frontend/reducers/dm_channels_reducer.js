import { RECEIVE_DM_CHANNELS, RECEIVE_DM_CHANNEL, REMOVE_DM_CHANNEL } from "../actions/dm_channel_actions";


const dmChannelReducer = (state = {}, action ) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)

    switch (action.type){
        case RECEIVE_DM_CHANNELS:
            return action.dmChannels;
        case RECEIVE_DM_CHANNEL:
            nextState[action.dmChannel.id] = action.dmChannel
            return nextState;
        case REMOVE_DM_CHANNEL:
            delete nextState[action.dmChannel.id]
        default:
            return state;
    }
}

export default dmChannelReducer