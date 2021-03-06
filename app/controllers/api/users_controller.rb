class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render "api/users/index"
    end

    def show
        @user = User.find_by(id: params[:id])
        render 'api/users/user_servers'
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json:  @user.errors.full_messages, status: 401
        end
    end

    private 

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
