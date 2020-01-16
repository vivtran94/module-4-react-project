class CreateAnime < ActiveRecord::Migration[6.0]
  def change
    create_table :animes do |t|
      t.string (:title)
      t.string (:description)
      t.integer (:episodes)
      t.string (:coverImage)
      t.integer (:averageScore)
      t.integer (:popularity)
      t.integer (:seasonYear)
      t.integer (:duration)
    end
  end
end
