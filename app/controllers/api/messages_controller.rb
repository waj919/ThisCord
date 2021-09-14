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
        @message.create
        render "api/messages/show"
    end

    def update
        @message = Message.find_by(id: params[:id])
        @message.update(messages_params)
    end

    def destroy

    end

    private

    def messages_params 
        params.require(:messages).require(:server_id, :sender_id, :chat_id, :channel_id)
    end

end