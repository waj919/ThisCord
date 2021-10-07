@user.joined_servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :name, :creator_id, :channels, :users
    end
end