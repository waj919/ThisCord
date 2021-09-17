import * as dmChannelUtil from "../util/dm_channel_util"

export const RECEIVE_DM_CHANNEL ="RECEIVE_DM_CHANNEL"
export const RECEIVE_DM_CHANNELS ="RECEIVE_DM_CHANNELS"
export const REMOVE_DM_CHANNEL ="REMOVE_DM_CHANNEL"


const receiveDmChannels = (dmChannels) => ({
    type: RECEIVE_DM_CHANNELS,
    dmChannels
})

const receiveDmChannel = (dmChannel) => ({
    type: RECEIVE_DM_CHANNEL,
    dmChannel
})

const removeDmChannel = (dmChannel) => ({
    type: REMOVE_DM_CHANNEL,
    dmChannel
})


export const fetchDmChannels = () => dispatch => {
    return dmChannelUtil.fetchDmChannels()
    .then( dmChannels => dispatch(receiveDmChannels(dmChannels)))
}


export const createDmChannel = dmChannel => dispatch => {
    return dmChannelUtil.createDmChannel(dmChannel)
    .then( dmChannel => dispatch(receiveDmChannel(dmChannel)))
}

export const deleteDmChannel = dmChannelId => dispatch => {
    return dmChannelUtil.deleteDmChannel(dmChannelId)
    .then( dmChannel => dispatch(removeDmChannel(dmChannel)))
}