Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # gets '/cookie_click', to: 'sessions#click'
  post "/login", to: "sessions#create"
end
