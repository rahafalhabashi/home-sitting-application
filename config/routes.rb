Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
    resources :users

  # root "articles#index"
    get "/users", to: 'users#index'
    post "/login", to: "sessions#create"
    get "sign_up", to: "registrations#new"

    get "/me", to: "users#show"  

    # get '*path', to: 'pages#index', via: :all
end
