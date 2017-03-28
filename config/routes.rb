require 'uri'
Rails.application.routes.draw do
  #devise_for :users
  root to: 'application#angular'
  resources :institutions, only: [:index, :show] do
    resources :degrees, only: [:index, :create],shallow: true
    resources :subjects, only: [:index, :create], shallow: true
    resources :evaluator_agents, only: [:index, :create, :update], shallow: true do
      post :create_teachers, on: :collection
      patch :toggle_authorized, on: :member
    end
  end
  resources :scales, only: [:index]
  resources :document_types, only: [:index]
  devise_for :users, controllers: {
    confirmations: 'users/confirmations',
    registrations: 'users/registrations'
  }
  get "/iniciar_sesion", to: 'application#angular', as: :login
  get '*path', to: 'application#angular'
end
