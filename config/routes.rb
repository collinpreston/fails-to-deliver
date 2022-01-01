Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'company', to: 'company#index'
      get 'company/:id', to: 'company#show_by_id', constraints: { id: /\d+/ }
      get 'company/:id', to: 'company#show_by_symbol'
      post 'settlement-resource', to: 'settlement_resource#create' 
      post 'inquiry', to: 'inquiry#create'
    end
  end

  get '*path', to: 'application#frontend_index_html', constraints: lambda { |request|
      !request.xhr? && request.format.html?
    }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
