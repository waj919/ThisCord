@user.joined_servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :name, :channels, :users
    end
end