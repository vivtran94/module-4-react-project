class CreateUser < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string (:firstName)
      t.string (:lastName)
      t.string (:username)
      t.string (:password)
    end
  end
end
