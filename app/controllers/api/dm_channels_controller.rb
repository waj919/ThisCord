class Api::DmChannelsController < ApplicationController

    def index
        @dm_channels = DmChannel.where(user1_id: current_user.id).or(DmChannel.where(user2_id: current_user.id))
        # debugger

        if !@dm_channels
            @dm_channels = DmChannel.where(user2_id: current_user.id)
            render "/api/dm_channels/index"
        else

            render "/api/dm_channels/index"
        end

    end

    def create
        @dm_channel = DmChannel.new(dm_channels_params)

        @dm_channel.save
        render "api/dm_channels/show"

    end

    def destroy


    end

    private 
    def dm_channels_params
        params.require(:dm_channel).permit(:user1_id, :user2_id)
    end
end