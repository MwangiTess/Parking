Rails.application.routes.draw do
  post '/users/submit_form', to: 'users#submit_form'
  resources :users, only: [:create, :index]
  get 'application/generate_token'
  get 'application/verify_token'

end
