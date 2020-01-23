class WatchlistsController < ApplicationController

    def create
        watchlist = Watchlist.create(
            user: current_user,
            anime_id: params[:anime_id]
        )
        render :json => watchlist
    end

    def update
        anime_id =  params[:id]
        user_id= session[:user_id]
        watchlist = Watchlist.find_by(anime_id: anime_id, user_id: user_id )
        watchlist.update(has_been_watched: true)


    end





end