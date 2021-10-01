import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from "../actions/server_actions";

const serverReducer = (state ={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign( {}, state );
    
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.servers;
        case RECEIVE_SERVER:
            nextState[action.server.id] = action.server
            return nextState;
        case REMOVE_SERVER: 
        debugger
            delete nextState[action.server.id]
            return nextState;
        default:
            return state;
    }
}


export default serverReducer