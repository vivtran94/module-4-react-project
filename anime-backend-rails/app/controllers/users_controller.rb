class UsersController < ApplicationController

    def profile
        # render json: current_user
        render( json: current_user, include: [ :animes,  :watchlists ] )
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