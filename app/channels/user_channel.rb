class UserChannel < ApplicationCable::Channel

    def subscribed
    
      @user = User.find_by(id: params[:id])
      # debugger
      stream_for @user
    end
  
    def receive(data)
    #   @message = Message.new(data['message'])
    #   @message.save
        UserChannel.broadcast_to(@user, message: data['message'])
    end

    
    def unsubscribed;
  
    end
  
  end