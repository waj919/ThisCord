class Api::DmMessagesController <  ApplicationController

    def index
        @dm_messages = DmMessage.where(dm_channel_id: params[:dm_channel_id])

        render "api/dm_messages/show"

    end

    def show

        @dm_message = DmMessage.find_by(id: params[:id])
        render "api/dm_messages/show"
    end

    def create
        @dm_message = DmMessage.new(dm_messages_params)
        @dm_message.sender_id = current_user.id
        @dm_message.save
        render "api/dm_messages/show"
    end

    def update
        @dm_message = DmMessage.find_by(id: params[:id])
        @dm_message.update(messages_params)
    end

    def destroy
        @dm_message = DmMessage.find_by(id: params[:id])
        @dm_message.destroy
    end

    private

    def dm_messages_params
        params.require(:dm_message).permit(:dm_channel_id, :body)
    end
end