# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_16_211917) do

  create_table "animes", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "episodes"
    t.string "coverImage"
    t.integer "averageScore"
    t.integer "popularity"
    t.integer "seasonYear"
    t.integer "duration"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "username"
    t.string "password_digest"
  end

  create_table "watchlists", force: :cascade do |t|
    t.integer "user_id"
    t.integer "anime_id"
    t.boolean "has_been_watched" :default => false
  end

end
