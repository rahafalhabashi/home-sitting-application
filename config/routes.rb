Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")


  # root "articles#index"
  # gets '/cookie_click', to: 'sessions#click'
    post "/login", to: "sessions#create"
    get "sign_up", to: "registrations#new"
    # resources :users, only: [:index, :create, :destroy]
    namespace :api do
      namespace :v1 do
        resources :users, only: [:index, :show, :create, :update, :destroy]
      end
    end

    get '*path', to: 'pages#index', via: :all
end
