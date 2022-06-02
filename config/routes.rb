Rails.application.routes.draw do
  resources :accounts, only: [:index, :post]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  resources :users
  resources :houses, only: [:index, :show, :update]

  # root "articles#index"
    get "/users", to: 'users#index'
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    # get "sign_up", to: "registrations#new"

    get "/authorized_user", to: "users#show"  
    # get "/BookingsPage", to: ""
end
