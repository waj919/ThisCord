class Api::ServersController < ApplicationController


    def index
        @servers = Servers.all
        render :index
    end

    def show
        @server = Server.find_by(id: params[:id])
    end

    def create
        @server = Server.new(server_params)
        @server.creator_id = current_user.id
        @server.save
        user_server = UserServers.new(user_id: current_user.id, server_id: @server.id)
        user_server.save
        render "api/servers/show"
    end

    def update
        @server = Server.find_by(id: params[:id])
        @server.update(server_params)
    end

    def destroy
        @server = Server.find_by(id: params[:id])
        if @server.creator_id != current_user.id
            render json: ["Must be owner to delete server"], status: 400
        else

            @server.destroy
        end
    end



    private

    def server_params
        params.require(:server).permit(:name)
    end
end