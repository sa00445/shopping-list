require 'test_helper'

class MainControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get main_home_url
    assert_response :success
  end

  test "should get about" do
    get main_about_url
    assert_response :success
  end

  test "should get shop" do
    get main_shop_url
    assert_response :success
  end

end
