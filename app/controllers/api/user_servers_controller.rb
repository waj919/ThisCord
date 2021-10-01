class Api::UserServersController < ApplicationController

    def create
        @user_server = UserServers.new(user_servers_params)
        @user_server.user_id = current_user.id
        @user_server.save
    end

    def update
        @user_server = UserServers.where(
            user_servers_params).where(
                user_id: current_user.id
            )
        @user_server[0].delete
   
    end


    private

    def user_servers_params
        params.require(:UserServers).permit(:server_id)
    end
end