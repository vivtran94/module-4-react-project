class WatchlistsController < ApplicationController

    def create
        watchlist = Watchlist.create(
            user: current_user,
            anime_id: params[:anime_id]
        )
        render :json => watchlist
    end



end