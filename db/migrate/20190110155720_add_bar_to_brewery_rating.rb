class AddBarToBreweryRating < ActiveRecord::Migration[5.2]
  def change
    add_reference :brewery_ratings, :bar, foreign_key: true
  end
end
