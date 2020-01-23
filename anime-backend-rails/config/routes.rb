Rails.application.routes.draw do
  resources(:users)
  resources(:animes)
  resources(:watchlists)

  post('/login', { to: 'users#login'})
  get('/profile', { to: 'users#profile'})
  post('/logout', { to: 'users#logout'})

end
