class AddBarToDiveRating < ActiveRecord::Migration[5.2]
  def change
    add_reference :dive_ratings, :bar, foreign_key: true
  end
end
