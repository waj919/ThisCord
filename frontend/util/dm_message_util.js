export const fetchDmMessages = (dm_channel_id) => {
    return $.ajax({
        method: "get",
        url: `/api/messages`,
        data: {dm_channel_id}
    })
}

export const createDmMessage = dm_message => {
    return $.ajax({
        method: "post",
        url: `/api/dm_messages`,
        data: {dm_message}
    })
}


export const deleteDmMessage = dm_message_id => {
    return $.ajax({
        method: "delete",
        url: `/api/dm_messages/${dm_message_id}`,
    })
}