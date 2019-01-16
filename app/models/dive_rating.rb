class DiveRating < ApplicationRecord
    belongs_to :bar
    
    def stars
        [
            cd_jukebox,
            sweet_caroline,
            pickeled,
            dollar_bills,
            writing_wall,
            mirror,
            pbr,
            domestic_sign,
            wash_hands,
            urinal_cake,
            smoking,
            dart_board
        ].count(true) / 3.0
    end
end