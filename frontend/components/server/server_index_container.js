import { connect } from "react-redux";
import ServerIndex from "./server_index"
import { createServer, fetchUserServers,  removeServer, updateServer, leaveServer} from "../../actions/server_actions";
import { createUserServer, fetchServers } from "../../util/server_util";
import{ logout } from "../../actions/session_actions";
import { createChannel, fetchChannel, fetchServerChannels, updateChannel } from "../../actions/channel_actions";
import { createMessage, fetchMessages } from "../../actions/message_actions";


const mSTP = (state, ownProps) => {
    return {    
        servers: Object.values(state.entities.server),
        currentUserId: state.session.currentUser.id,
        username: state.session.currentUser.username,
        server: state.entities.server[ownProps.match.params.serverId],
        channelId: parseInt(ownProps.match.params.channelId),
        messages: Object.values(state.entities.message),
    }
}

const mDTP = dispatch => ({
    createUserServer: serverId => createUserServer(serverId),
    fetchServers: () => fetchServers(),
    fetchUserServers: userId => dispatch(fetchUserServers(userId)),
    fetchMessages: channelId => dispatch(fetchMessages(channelId)),
    createMessage: message => dispatch(createMessage(message)),
    createServer: server => dispatch(createServer(server)),
    removeServer: serverId => dispatch(removeServer(serverId)),
    leaveServer: serverId => dispatch(leaveServer(serverId)),
    createChannel: channel => dispatch(createChannel(channel)),
    updateServer: server => dispatch(updateServer(server)),
    updateChannel: channel => dispatch(updateChannel(channel)),
    logout: () => dispatch(logout())
})


export default connect(mSTP, mDTP)(ServerIndex)