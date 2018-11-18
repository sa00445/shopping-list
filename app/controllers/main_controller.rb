class MainController < ApplicationController
  def home
    @title = "Home"
  end

  def about
    @title = "About"
  end

  def shop
    @title = "Shop"
  end
end
