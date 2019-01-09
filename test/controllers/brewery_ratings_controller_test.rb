require 'test_helper'

class BreweryRatingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @brewery_rating = brewery_ratings(:one)
  end

  test "should get index" do
    get brewery_ratings_url
    assert_response :success
  end

  test "should get new" do
    get new_brewery_rating_url
    assert_response :success
  end

  test "should create brewery_rating" do
    assert_difference('BreweryRating.count') do
      post brewery_ratings_url, params: { brewery_rating: { ale: @brewery_rating.ale, apa: @brewery_rating.apa, blonde: @brewery_rating.blonde, crowler: @brewery_rating.crowler, growler: @brewery_rating.growler, hefe: @brewery_rating.hefe, ipa: @brewery_rating.ipa, pale: @brewery_rating.pale, pilsner: @brewery_rating.pilsner, porter: @brewery_rating.porter, rail: @brewery_rating.rail, stout: @brewery_rating.stout } }
    end

    assert_redirected_to brewery_rating_url(BreweryRating.last)
  end

  test "should show brewery_rating" do
    get brewery_rating_url(@brewery_rating)
    assert_response :success
  end

  test "should get edit" do
    get edit_brewery_rating_url(@brewery_rating)
    assert_response :success
  end

  test "should update brewery_rating" do
    patch brewery_rating_url(@brewery_rating), params: { brewery_rating: { ale: @brewery_rating.ale, apa: @brewery_rating.apa, blonde: @brewery_rating.blonde, crowler: @brewery_rating.crowler, growler: @brewery_rating.growler, hefe: @brewery_rating.hefe, ipa: @brewery_rating.ipa, pale: @brewery_rating.pale, pilsner: @brewery_rating.pilsner, porter: @brewery_rating.porter, rail: @brewery_rating.rail, stout: @brewery_rating.stout } }
    assert_redirected_to brewery_rating_url(@brewery_rating)
  end

  test "should destroy brewery_rating" do
    assert_difference('BreweryRating.count', -1) do
      delete brewery_rating_url(@brewery_rating)
    end

    assert_redirected_to brewery_ratings_url
  end
end
