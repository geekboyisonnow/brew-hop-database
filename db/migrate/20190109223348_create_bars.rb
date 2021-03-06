class CreateBars < ActiveRecord::Migration[5.2]
  def change
    create_table :bars do |t|
      t.string :name
      t.string :location
      t.decimal :latitude
      t.decimal :longitude
      t.string :phone
      t.string :hours
      t.string :kind

      t.timestamps
    end
  end
end
