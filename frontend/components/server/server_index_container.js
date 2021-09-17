import { connect } from "react-redux";
import ServerIndex from "./server_index"
import { createServer, fetchUserServers,  removeServer, updateServer, leaveServer} from "../../actions/server_actions";
import { createUserServer, fetchServers } from "../../util/server_util";
import{ logout } from "../../actions/session_actions";
import { createChannel, fetchChannel, updateChannel, deleteChannel } from "../../actions/channel_actions";
import { createMessage, fetchMessages } from "../../actions/message_actions";
import { fetchDmChannels } from "../../actions/dm_channel_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { createDmMessage } from "../../actions/dm_message_actions"


const mSTP = (state, ownProps) => {
    return { 
        path: ownProps.match.url,
        // users: Object.values(state.entities.users),
        servers: Object.values(state.entities.server),
        currentUserId: state.session.currentUser.id,
        username: state.session.currentUser.username,
        server: state.entities.server[ownProps.match.params.serverId],
        channelId: parseInt(ownProps.match.params.channelId),
        messages: Object.values(state.entities.message),
        dmChannels: Object.values(state.entities.dmChannels),
        dmChannel: state.entities.dmChannels[ownProps.match.params.dmChannelId]
    }
}

const mDTP = dispatch => ({
    createUserServer: serverId => createUserServer(serverId),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchServers: () => fetchServers(),
    fetchUserServers: userId => dispatch(fetchUserServers(userId)),
    fetchMessages: channelId => dispatch(fetchMessages(channelId)),
    createMessage: message => dispatch(createMessage(message)),
    createServer: server => dispatch(createServer(server)),
    removeServer: serverId => dispatch(removeServer(serverId)),
    leaveServer: serverId => dispatch(leaveServer(serverId)),
    createChannel: channel => dispatch(createChannel(channel)),
    deleteChannel: channelId => dispatch(deleteChannel(channelId)),
    updateServer: server => dispatch(updateServer(server)),
    updateChannel: channel => dispatch(updateChannel(channel)),
    fetchDmChannels: () => dispatch(fetchDmChannels()),
    createDmMessage: (dmMessage) => dispatch(createDmMessage(dmMessage)),
    logout: () => dispatch(logout())
})


export default connect(mSTP, mDTP)(ServerIndex)