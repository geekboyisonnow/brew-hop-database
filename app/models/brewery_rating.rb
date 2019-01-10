class BreweryRating < ApplicationRecord
  belongs_to :bar

  def overall_rating
    [
        ipa,
        apa,
        ale,
        hefe,
        porter,
        stout,
        pale,
        blonde,
        pilsner,
        growler,
        crowler,
        rail
    ].count(true)
  end
end
