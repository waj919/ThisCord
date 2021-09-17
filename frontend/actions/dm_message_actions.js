import * as dmMessageUtil from "../util/dm_message_util"

export const RECEIVE_DM_MESSAGE ="RECEIVE_DM_MESSAGE"
export const RECEIVE_DM_MESSAGES ="RECEIVE_DM_MESSAGES"
export const REMOVE_DM_MESSAGE ="REMOVE_DM_MESSAGE"


const receiveDmMessages = (dmMessages) => ({
    type: RECEIVE_DM_MESSAGES,
    dmMessages
})

const receiveDmMessage = (dmMessage) => ({
    type: RECEIVE_DM_MESSAGE,
    dmMessage
})

const removeDmMessage = (dmMessage) => ({
    type: REMOVE_DM_MESSAGE,
    dmMessage
})


export const fetchDmMessages = (dmChannelId) => dispatch => {
    return dmMessageUtil.fetchDmMessages(dmChannelId)
    .then( dmMessages => dispatch(receiveDmMessages(dmMessages)))
}


export const createDmMessage = dmMessage => dispatch => {
    return dmMessageUtil.createDmMessage(dmMessage)
    .then( dmMessage => dispatch(receiveDmMessage(dmMessage)))
}

export const deleteDmMessage = dmMessageId => dispatch => {
    return dmMessageUtil.deleteDmMessage(dmMessageId)
    .then( dmMessage => dispatch(removeDmMessage(dmMessage)))
}