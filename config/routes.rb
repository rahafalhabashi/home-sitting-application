Rails.application.routes.draw do
  resources :accounts, only: [:index, :post]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  resources :users, only: [:index, :show, :update, :destroy, :create]
  resources :houses, only: [:index, :show, :update]

  # root "articles#index"
    get "/users", to: 'users#index'
    post "/login", to: "sessions#create"
    get "sign_up", to: "registrations#new"

<<<<<<< HEAD
    get "/me", to: "users#show"  
    get "/BookingsPage", to: "house#show"

=======
    get "/authorized_user", to: "users#show"  
>>>>>>> 8ad7d8a1dc4b03c8e1de62e8ac223cf0d226c5b3
end
