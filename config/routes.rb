Rails.application.routes.draw do

  match "/home" => "main#home", via: :get
  match "/about" => "main#about", via: :get
  match "/shop" => "main#shop", via: :get

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#home'
end
