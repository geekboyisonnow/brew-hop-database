class Bar < ApplicationRecord
    has_many :brewery_ratings, foreign_key: :bar_id
    has_many :dive_ratings, foreign_key: :bar_id
    validates :name, uniqueness: true
    end
