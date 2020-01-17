class UsersController < ApplicationController

    def login
        user = User.find_by({ username: params[:username] })
        if user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: { user: user}
        else
            render json: { failed: true, message: 'Wrong password. Try again! :)'}
        end
    end


end