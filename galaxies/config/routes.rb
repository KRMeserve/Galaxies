Rails.application.routes.draw do
  get '/galaxies', to: 'galaxies#index'
  get 'galaxies/:id', to: 'galaxies#show'
  post '/galaxies', to: 'galaxies#create'
  delete '/galaxies/:id', to: 'galaxies#delete'
  put '/galaxies/:id', to: 'galaxies#update'
end
