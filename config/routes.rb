Rails.application.routes.draw do
  resources :dive_ratings
  resources :brewery_ratings
  resources :bars
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
