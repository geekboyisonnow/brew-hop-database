class AddRatingToBar < ActiveRecord::Migration[5.2]
  def change
    add_column :bars, :rating, :decimal
  end
end
