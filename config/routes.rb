Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "/apps", to:"apps#index"
  get "/apps/tictactoe", as: "ttt"
  # Defines the root path route ("/")
  # root "articles#index"
end
