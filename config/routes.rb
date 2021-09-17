Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resources :channels, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resource :user_servers, only: [:create, :update]
    resources :messages, only: [:index, :create, :update, :destroy, :show]
    resources :dm_messages, only: [:index, :create, :update, :show, :destroy]
    resources :dm_channels, only: [:index, :create, :destroy]
    
  end 
end
