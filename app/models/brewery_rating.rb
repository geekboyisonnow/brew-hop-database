class BreweryRating < ApplicationRecord
    belongs_to :bar_id, class_name: 'Bar', optional: true
end
