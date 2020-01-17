Rails.application.routes.draw do
  resources(:users)
  resources(:animes)
  resources(:watchlists)

  get('/users/login', { to: 'users#login'})

  
end
