@messages.each do |message|
    json.set! message.id do
        json.extract! message, :id, :body, :channel_id, :sender_id, :sender, :created_at
        json.channel_name message.channel.name
    end
end