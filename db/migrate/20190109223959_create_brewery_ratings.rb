class CreateBreweryRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :brewery_ratings do |t|
      t.reference :bars

      t.boolean :ipa
      t.boolean :apa
      t.boolean :ale
      t.boolean :hefe
      t.boolean :porter
      t.boolean :stout
      t.boolean :pale
      t.boolean :blonde
      t.boolean :pilsner
      t.boolean :growler
      t.boolean :crowler
      t.boolean :rail

      t.timestamps
    end
  end
end
