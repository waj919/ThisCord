@dm_messages.each do |message|
    json.extract! message, :body, :dm_channel_id, :user
end