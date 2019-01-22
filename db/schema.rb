# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_22_154639) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bars", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.float "latitude"
    t.float "longitude"
    t.string "phone"
    t.string "hours"
    t.string "kind"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "rating"
  end

  create_table "brewery_ratings", force: :cascade do |t|
    t.bigint "bar_id"
    t.boolean "ipa"
    t.boolean "apa"
    t.boolean "ale"
    t.boolean "hefe"
    t.boolean "porter"
    t.boolean "stout"
    t.boolean "pale"
    t.boolean "blonde"
    t.boolean "pilsner"
    t.boolean "growler"
    t.boolean "crowler"
    t.boolean "rail"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bar_id"], name: "index_brewery_ratings_on_bar_id"
  end

  create_table "dive_ratings", force: :cascade do |t|
    t.bigint "bar_id"
    t.boolean "cd_jukebox"
    t.boolean "sweet_caroline"
    t.boolean "pickeled"
    t.boolean "dollar_bills"
    t.boolean "writing_wall"
    t.boolean "mirror"
    t.boolean "pbr"
    t.boolean "domestic_sign"
    t.boolean "wash_hands"
    t.boolean "urinal_cake"
    t.boolean "smoking"
    t.boolean "dart_board"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bar_id"], name: "index_dive_ratings_on_bar_id"
  end

  add_foreign_key "brewery_ratings", "bars"
  add_foreign_key "dive_ratings", "bars"
end
