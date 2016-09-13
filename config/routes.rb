Rails.application.routes.draw do

  root                     								'static_pages#welcome'
  get		'/what-have-you-done'					=> 	'static_pages#projects'
  get		'/game-of-life'							=> 	'static_pages#game_of_life'
  get		'/has-matheus-portela-failed-already'	=>	'static_pages#has_matheus_portela_failed'
  get     	'/who-are-you'							=>	'static_pages#about_me'
  get   '/quaternions'            => 'static_pages#quaternions'
  get     	'/blog'	 								=>	'posts#index'
  get     	'/signup'  								=>	'users#new'
  get     	'/login'   								=>	'sessions#new'
  post    	'/login'   								=>	'sessions#create'
  get	  	'/logout'  								=>	'sessions#destroy'
  
  resources :posts do
    resources :comments
  end
end