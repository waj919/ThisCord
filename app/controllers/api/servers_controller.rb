class Api::ServersController < ApplicationController


    def index
        @servers = Server.all
        render "api/servers/index"
    end

    def show
        @server = Server.find_by(id: params[:id])
    end

    def create
        @server = Server.new(server_params)
        @server.creator_id = current_user.id
        @server.save
        channel = Channel.new(name: "general", server_id: @server.id)
        channel.save
        user_server = UserServers.new(user_id: current_user.id, server_id: @server.id)
        user_server.save
        render "api/servers/show"
    end

    def update
        @server = Server.find_by(id: params[:id])
        @server.update(server_params)

        render "api/servers/show"
    end

    def destroy
        @server = Server.find_by(id: params[:id])
        @id = @server.id
        @channels = @server.channels
        if @server.creator_id != current_user.id
            render json: ["Must be owner to delete server"], status: 400
        else       
            @channels.destroy
            @server.destroy
            render json: @id
        end
    end



    private

    def server_params
        params.require(:server).permit(:name)
    end
end