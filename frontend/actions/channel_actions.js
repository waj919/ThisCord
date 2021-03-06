import * as channelUtil from "../util/channel_util"

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS"
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL"
export const REMOVE_CHANNEL = "REMOVE_CHANNEL"


const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
})

const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
})

const removeChannel = (channel) => ({
    type: REMOVE_CHANNEL,
    channel
})



export const fetchChannel = (channelId) => dispatch => {
    return channelUtil.fetchChannel(channelId)
    .then( (channel) => (dispatch(receiveChannel(channel))))
}


export const createChannel = (channel) => dispatch => {
    return channelUtil.createChannel(channel)
    .then( (channel) => (dispatch(receiveChannel(channel))))
}

export const deleteChannel = (channelId) => dispatch => {
    return channelUtil.deleteChannel(channelId)
    .then( (channel) => (dispatch(removeChannel(channel))))
}

export const updateChannel = channel => dispatch => {
    return channelUtil.updateChannel(channel)
    .then( channel => dispatch(receiveChannel(channel)))
}

export const fetchServerChannels = serverId => dispatch => {
    return channelUtil.fetchServerChannels(serverId) 
    .then( channels => dispatch(receiveChannels(channels)))
}

