import { connect } from "react-redux";
import ServerIndex from "./server_index"
import { createServer, fetchUserServers,  removeServer, updateServer} from "../../actions/server_actions";
import{ logout } from "../../actions/session_actions";
import { createUserServer, fetchServers } from "../../util/server_util";
import { createChannel, fetchServerChannels } from "../../actions/channel_actions";


const mSTP = (state, ownProps) => {
    return {    
        servers: Object.values(state.entities.server),
        currentUserId: state.session.currentUser.id,
        server: state.entities.server[ownProps.match.params.serverId]
    }
}

const mDTP = dispatch => ({
    createUserServer: serverId => createUserServer(serverId),
    fetchServers: () => fetchServers(),
    fetchUserServers: userId => dispatch(fetchUserServers(userId)),
    createServer: server => dispatch(createServer(server)),
    removeServer: serverId => dispatch(removeServer(serverId)),
    createChannel: channel => dispatch(createChannel(channel)),
    updateServer: server => dispatch(updateServer(server)),
    logout: () => dispatch(logout())
})


export default connect(mSTP, mDTP)(ServerIndex)