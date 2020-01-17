Rails.application.routes.draw do
  resources(:users)
  resources(:animes)
  resources(:watchlists)

  post('/login', { to: 'users#login'})


end
