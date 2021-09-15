export const fetchMessages = (channel_id) => {
    return $.ajax({
        method: "get",
        url: `/api/messages`,
        data: {channel_id: channel_id}
    })
};

export const fetchMessage = messageId => {
    return $.ajax({
        method: "get",
        url: `/api/messages/${messageId}`
    })
};

export const deleteMessage = (messageId) => {
    return $.ajax({
        method: "delete",
        url: `/api/messages/${messageId}`
    })
};

export const updateMessage = (message) => {
    return $.ajax({
        method: "patch",
        url: `/api/messages/${message.id}`,
        data: {message}
    })
};

export const createMessage = message => {
    return $.ajax({
        method: "post",
        url: "/api/messages",
        data: {message}
    })
};