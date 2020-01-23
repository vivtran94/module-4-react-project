class UsersController < ApplicationController

    def profile
        render( json: current_user, include: [ :animes ] )
    end

    def login
        user = User.find_by({ username: params[:username] })
        if user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: { user: user }
        else
            render json: { failed: true, message: 'Wrong password. Try again! :)'}
        end
    end

    def create
        if User.find_by({ username: params[:username]})
            render json: { failed: true, message: "Username already taken. Try another one! :O"}
        else
            user = User.create(
                firstName: params[:firstname],
                lastName: params[:lastname],
                username: params[:username],
                password: params[:password]
            )
            session[:user_id] = user.id
            render json: { user: user }
        end
    end

    def logout
        session[:user_id] = nil

    end



end