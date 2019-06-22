Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    namespace :v1 do
      resources :tasks do
        get 'recycle', on: :member
        collection do
          get 'destroyed'
        end
      end
    end
  end
end
