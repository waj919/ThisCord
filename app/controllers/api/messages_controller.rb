class Api::MessagesController < ApplicationController

    def index
        @messages = Message.where(channel_id: params[:channel_id])
        render "/api/messages/index"
    end

    def show
        @message = Message.find_by(id: params[:id])
        render "api/messages/show"
    end

    def create

        @message = Message.new(messages_params)
        @message.save
        render "api/messages/show"
    end

    def update
        @message = Message.find_by(id: params[:id])
        @message.update(messages_params)
    end

    def destroy
        @message = Message.find_by(id: params[:id])
        @id = @message.id
        @message.destroy
        render json: @id
    end

    private

    def messages_params 
        params.require(:message).permit(:sender_id, :body, :channel_id)
    end

end