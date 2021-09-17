export const fetchServerChannels = serverId => {
    return $.ajax({
        method: "get",
        url: `/api/channels`,
        data: {server_id: serverId}
    })
};

export const fetchChannel = channelId => {
    return $.ajax({
        method: "get",
    url: `/api/channels/${channelId}`
    })
};

export const deleteChannel = (channelId) => {
    return $.ajax({
        method: "delete",
        url: `/api/channels/${channelId}`
    })
};

export const updateChannel = (channel) => {
    return $.ajax({
        method: "patch",
        url: `/api/channels/${channel.id}`,
        data: {channel}
    })
};

export const createChannel = channel => {
    return $.ajax({
        method: "post",
        url: "/api/channels",
        data: {channel}
    })
};