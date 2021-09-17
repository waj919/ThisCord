export const fetchDmChannels = () => {
    return $.ajax({
        method: "get",
        url: `/api/dm_channels`,
    })
}

export const createDmChannel = dm_channel => {
    return $.ajax({
        method: "post",
        url: `/api/dm_channels`,
        data: {dm_channel}
    })
}

export const deleteDmChannel = (dm_channel_id) => {
    return $.ajax({
        method: "delete",
        url: `/api/dm_channels/${dm_channel_id}`
    })
};