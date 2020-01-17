class User < ApplicationRecord
    has_many :watchlists
    has_many :animes, through: :watchlists

    has_secure_password
end