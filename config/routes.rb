Rails.application.routes.draw do
  resources :dive_ratings
  resources :brewery_ratings
  resources :bars
  resources :bars
  
  # get '/bars.json', to: 'bars#index'
  #   path                # controller name/method name
  #get '/api/bars', to: 'api/bars#index'

end
