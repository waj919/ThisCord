class DirectMessageChannel < ApplicationCable::Channel

    def subscribed
    
      @dm_channel = DmChannel.find_by(id: params[:id])
      
      stream_for @dm_channel
    end
  
    def receive(data)
      DirectMessageChannel.broadcast_to(@dm_channel, message: data['message'])
    end
  
    def unsubscribed;
  
    end
  
  end