import { connect } from "react-redux";
import ServerIndex from "./server_index"
import { createServer, fetchUserServers,  removeServer} from "../../actions/server_actions";
import{ logout } from "../../actions/session_actions";
import { createUserServer, fetchServers } from "../../util/server_util";


const mSTP = (state) => {
    return {    
        servers: Object.values(state.entities.server),
        currentUserId: state.session.currentUser.id
    }
}

const mDTP = dispatch => ({
    createUserServer: serverId => createUserServer(serverId),
    fetchServers: () => fetchServers(),
    fetchUserServers: userId => dispatch(fetchUserServers(userId)),
    createServer: server => dispatch(createServer(server)),
    removeServer: serverId => dispatch(removeServer(serverId)),
    logout: () => dispatch(logout())
})


export default connect(mSTP, mDTP)(ServerIndex)