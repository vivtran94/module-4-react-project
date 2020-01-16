class User < ApplicationRecord
    has_many :watchlists
    has_many :animes, through: :watchlists
end