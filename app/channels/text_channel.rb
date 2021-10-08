class TextChannel < ApplicationCable::Channel

  def subscribed
  
    @channel = Channel.find_by(id: params[:id])

    stream_for @channel
  end

  def receive(data)
    TextChannel.broadcast_to(@channel, message: data['message'])
  end

end