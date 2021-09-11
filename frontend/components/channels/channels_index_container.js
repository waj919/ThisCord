import { connect } from 'react-redux';
import { createChannel, fetchChannel, fetchServerChannels } from '../../actions/channel_actions';

import ChannelsIndex from "./channels_index"




const mSTP = (state, ownProps) => {
    return {
    channels: Object.values(state.entities.channel),
    currentUserId: state.session.currentUser.id
}
}

const mDTP = (dispatch) => ({
    fetchServerChannels: serverId => dispatch(fetchServerChannels(serverId)),
    fetchChannel: channel => dispatch(fetchChannel(channel)),
    createChannel: channel => dispatch(createChannel(channel))
})

// export default connect(mSTP, mDTP)(ChannelsIndex)