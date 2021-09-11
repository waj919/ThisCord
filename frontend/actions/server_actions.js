import * as serverUtil from "../util/server_util"


export const RECEIVE_SERVERS = "RECEIVE_SERVERS"
export const RECEIVE_SERVER = "RECEIVE_SERVER"
export const REMOVE_SERVER = "CREATE_SERVER"



const receiveServers = (servers) => ({
    type: RECEIVE_SERVERS,
    servers
})

const receiveServer = (server) => ({
    type: RECEIVE_SERVER,
    server
})


const deleteServer = (server) => ({
    type: REMOVE_SERVER,
    server
})

export const fetchServers = () => dispatch => {
    return serverUtil.fetchServers()
    .then( (servers) => (dispatch(receiveServers(servers))))
}


export const fetchServer = (server) => dispatch => {
    return serverUtil.fetchServer(server)
    .then( (server) => (dispatch(receiveServer(server))))
}

export const fetchUserServers = (userId) => dispatch => {
    return serverUtil.fetchUserServers(userId)
    .then( (servers) => (dispatch(receiveServers(servers))))
}

export const createServer = (server) => dispatch => {
    return serverUtil.createServer(server)
    .then( (server) => (dispatch(receiveServer(server))))
}

export const removeServer = (serverId) => dispatch => {
    return serverUtil.deleteServer(serverId)
    .then( (server) => (dispatch(deleteServer(server))))
}

export const updateServer = (server) => dispatch => {
    return serverUtil.updateServer(server)
    .then( server => dispatch(receiveServer(server)))
}