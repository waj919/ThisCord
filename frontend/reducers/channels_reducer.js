import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL, REMOVE_CHANNELS } from "../actions/channel_actions";

const channelReducer = (state= {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign( {}, state); 

    switch (action.type) {
        case RECEIVE_CHANNELS:
            return action.channels;
        case RECEIVE_CHANNEL:
            nextState[action.channel.id] = action.channel;
            return nextState;
        case REMOVE_CHANNEL: 
            delete nextState[action.channel]
            return nextState;
        default:
            return state;
    }

}

export default channelReducer;