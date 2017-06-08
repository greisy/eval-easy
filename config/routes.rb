require 'uri'
Rails.application.routes.draw do

  get 'environments/show'

  #devise_for :users
  root to: 'application#angular'
  resources :institutions, only: [:index]
  resources :environments, only: [:create] do
    resources :subjects,defaults: {format: :json}, only: [:index,:create, :update], shallow: true
    resources :environment_users, defaults: {format: :json}, only: [:index, :create, :update], shallow: true do
      post :create_environment_users, on: :collection
    end
    resources :academic_terms, defaults: {format: :json}, only: [:create]
  end
  resources :roles, only: [:index]
=begin
  resources :institutions, only: [:index, :show] do
    resources :degrees, only: [:index, :create],shallow: true
    resources :subjects, only: [:index, :create], shallow: true
    resources :evaluator_agents, only: [:index, :create, :update], shallow: true do
      post :create_teachers, on: :collection
      patch :toggle_authorized, on: :member
    end
  end
=end
  resources :scales, only: [:index]
  resources :document_types, only: [:index]
  devise_for :users, controllers: {
    confirmations: 'users/confirmations',
    registrations: 'users/registrations',
    passwords: 'users/passwords'
  }
  resources :users do # acortar
    resources :environments, only: [:index]
  end
  get "/iniciar_sesion", to: 'application#angular', as: :login
  get "/cambiar_password/:id", to: 'application#angular', as: :change_password
  get '*path', to: 'application#angular'
end
