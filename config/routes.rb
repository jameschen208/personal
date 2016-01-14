Rails.application.routes.draw do
 devise_for :users
 resources :posts
 resources :contacts, only: [:new, :create]
 resources :photos, only: [:index]
 resources :projects
 get 'welcome/library'
 get 'welcome/index'
 root 'welcome#index'

 # get '*path' => redirect('/')
end
