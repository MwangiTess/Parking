Rails.application.routes.draw do
  resources :users, only: [:create, :index]
  get 'application/generate_token'
  get 'application/verify_token'
  post '/users/submit_form', to: 'users#submit_form'

end
