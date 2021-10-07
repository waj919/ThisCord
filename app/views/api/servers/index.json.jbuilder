json.array! @servers do |server|
    json.id server.id
    json.name server.name 
    json.owner server.creator_id
    json.servers server.channels
end