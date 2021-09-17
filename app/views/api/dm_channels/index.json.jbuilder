@dm_channels.each do |dm_channel|
    # debugger
    json.set! dm_channel.id do 
        json.extract! dm_channel, :id, :user_1, :user_2, :messages
        

    end
end