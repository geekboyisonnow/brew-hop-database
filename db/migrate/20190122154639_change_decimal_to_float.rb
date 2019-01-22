class ChangeDecimalToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :bars, :longitude, :float
    change_column :bars, :latitude, :float
  end
end
