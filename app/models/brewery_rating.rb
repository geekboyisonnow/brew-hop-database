class BreweryRating < ApplicationRecord
  belongs_to :bar

  def stars
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
    ].count(true) / 3.0
  end
end
