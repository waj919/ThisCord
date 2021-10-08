@dm_messages.each do |message|
    json.set! message.id do
        json.extract! message, :id, :body, :dm_channel_id, :created_at, :user
    end
end