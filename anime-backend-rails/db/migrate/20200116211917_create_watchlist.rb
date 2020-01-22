class CreateWatchlist < ActiveRecord::Migration[6.0]
  def change
    create_table :watchlists do |t|
      t.integer (:user_id)
      t.integer (:anime_id)
      t.boolean (:has_been_watched), :default => false
    end
  end
end
