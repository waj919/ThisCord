class Api::ChannelsController < ApplicationController
    
    def index
        @channels = Channel.where(server_id: params[:server_id])
        
        render "/api/channels/index"
    end

    def show
        @channel = Channel.find_by(id: params[:id])
        render "api/channels/show"
    end
    
    def create
        @channel = Channel.new(channel_params)
        @channel.save
        render "/api/channels/show"
    end

    def update
        @channel = Channel.find_by(id: params[:id])
        @channel.update(channel_params)

        render "/api/channels/show"
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        @server = Server.find_by(id: @channel.server_id)
        if @server.creator_id != current_user.id
            render json: ["Must be owner to delete channel"], status: 400
        else
            @channel.destroy
        end
    end

    private

    def channel_params
        params.require(:channel).permit(:name, :server_id)
    end
end