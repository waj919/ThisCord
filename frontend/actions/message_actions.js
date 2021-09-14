import * as messageUtil from "../util/message_util"


export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"



const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
})

const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
})

const removeMessage = (message) => ({
    type: REMOVE_MESSAGE,
    message
})

export const fetchMessages = channelId => dispatch => {
    return messageUtil.fetchMessages(channelId)
    .then( messages => dispatch(receiveMessages(messages)))
}

export const fetchMessage = (messageId) => dispatch => {
    return messageUtil.fetchMessage(messageId)
    .then( (message) => (dispatch(receiveMessage(message))))
}


export const createMessage = (message) => dispatch => {
    return messageUtil.createMessage(message)
    .then( (message) => (dispatch(receiveMessage(message))))
}

export const deleteMessage = (messageId) => dispatch => {
    return messageUtil.deleteMessage(messageId)
    .then( (message) => (dispatch(removeMessage(message))))
}

export const updateMessage = message => dispatch => {
    return messageUtil.updateMessage(message)
    .then( message => dispatch(receiveMessage(message)))
}




