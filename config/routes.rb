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

    get "/authorized_user", to: "users#show"  
end
