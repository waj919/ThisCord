json.array! @channels do |channel|
    json.id channel.id
    json.server_id channel.server_id
    json.name channel.name 
end