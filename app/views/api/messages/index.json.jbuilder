@messages.each do |message|
    json.set! message.id do
        json.extract! message, :id, :body, :channel_id, :sender_id
    end
end