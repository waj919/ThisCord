export const createServer = (server) => {
    return $.ajax({
        method: "post",
        url: "/api/servers",
        data: {server}
    })
}

export const deleteServer = (serverId) => {
    return $.ajax({
        method: "delete",
        url: `/api/servers/${serverId}`,
    })
}


export const updateServer = (server) => {
    return $.ajax({
        method: "patch",
        url: `/api/servers/${server.id}`,
        data: {server}
    })
}


export const fetchServers = () => {
    return $.ajax({
        method: "get",
        url: `/api/servers  `
    })
}


export const fetchServer = (serverId) => {
    return $.ajax({
        method: "get",
        url: `/api/servers/${serverId}`
    })
}

export const fetchUserServers = (userId) => {
    return $.ajax({
        method: "get",
        url: `/api/users/${userId}`
    })
}