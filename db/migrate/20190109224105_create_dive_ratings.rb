class CreateDiveRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :dive_ratings do |t|
      t.boolean :cd_jukebox
      t.boolean :sweet_caroline
      t.boolean :pickeled
      t.boolean :dollar_bills
      t.boolean :writing_wall
      t.boolean :mirror
      t.boolean :pbr
      t.boolean :domestic_sign
      t.boolean :wash_hands
      t.boolean :urinal_cake
      t.boolean :smoking
      t.boolean :dart_board

      t.timestamps
    end
  end
end
