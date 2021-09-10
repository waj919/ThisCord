class Api::UserServersController < ApplicationController

    def create
        debugger
        @user_server = UserServers.new(user_servers_params)
        @user_server.user_id = current_user.id
        @user_server.save
    end


    private

    def user_servers_params
        params.require(:UserServers).permit(:server_id)
    end
end