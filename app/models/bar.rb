class Bar < ApplicationRecord
  has_many :brewery_ratings, foreign_key: :bar_id, dependent: :destroy
  has_many :dive_ratings, foreign_key: :bar_id, dependent: :destroy
  validates :name, uniqueness: true

  geocoded_by :location
  after_validation :geocode

  def stars
    if kind == "dive"
      dive_stars
    else
      brewery_stars
    end
  end

  # Brewery stars is computed by taking all of the ratings for all of the brewery ratings, adding them up, and dividing by the size
  # This gives us an average of all the brewery rating stars
  def brewery_stars
    # Avoid divide by zero
    return 0 if brewery_ratings.size == 0

    brewery_ratings.map { |rating| rating.stars }.sum / brewery_ratings.size
  end
 
  # Dove stars is computed by taking all of the ratins for all of the dive ratings, adding them up, and dividing by the size
  # This gives us an average of all the dive rating stars
  def dive_stars
    # Avoid divide by zero
    return 0 if dive_ratings.size == 0

    dive_ratings.map { |rating| rating.stars }.sum / dive_ratings.size
  end
  # def bar_star
  #   if stars
  #     brewery_stars
  #   else
  #     dive_stars
  #   end 
  # end
end