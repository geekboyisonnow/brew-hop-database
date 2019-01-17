Rails.application.routes.draw do
  resources :dive_ratings
  resources :brewery_ratings
  resources :bars
  
  #   path                # controller name/method name
  get '/bars', to: 'bars#index'

end
