json.extract! bar, :id, :name, :location, :latitude, :longitude, :phone, :hours, :kind
json.url bar_url(bar, format: :json)
json.brewery_rating_count bar.brewery_ratings.count 
# json.brewery_ratings bar.brewery_ratings,
#                         partial: 'brewery_ratings/brewery_rating'
#                         as: :brewery_rating