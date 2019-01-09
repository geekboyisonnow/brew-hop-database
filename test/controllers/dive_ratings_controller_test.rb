require 'test_helper'

class DiveRatingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dive_rating = dive_ratings(:one)
  end

  test "should get index" do
    get dive_ratings_url
    assert_response :success
  end

  test "should get new" do
    get new_dive_rating_url
    assert_response :success
  end

  test "should create dive_rating" do
    assert_difference('DiveRating.count') do
      post dive_ratings_url, params: { dive_rating: { cd_jukebox: @dive_rating.cd_jukebox, dart_board: @dive_rating.dart_board, dollar_bills: @dive_rating.dollar_bills, domestic_sign: @dive_rating.domestic_sign, mirror: @dive_rating.mirror, pbr: @dive_rating.pbr, pickeled: @dive_rating.pickeled, smoking: @dive_rating.smoking, sweet_caroline: @dive_rating.sweet_caroline, urinal_cake: @dive_rating.urinal_cake, wash_hands: @dive_rating.wash_hands, writing_wall: @dive_rating.writing_wall } }
    end

    assert_redirected_to dive_rating_url(DiveRating.last)
  end

  test "should show dive_rating" do
    get dive_rating_url(@dive_rating)
    assert_response :success
  end

  test "should get edit" do
    get edit_dive_rating_url(@dive_rating)
    assert_response :success
  end

  test "should update dive_rating" do
    patch dive_rating_url(@dive_rating), params: { dive_rating: { cd_jukebox: @dive_rating.cd_jukebox, dart_board: @dive_rating.dart_board, dollar_bills: @dive_rating.dollar_bills, domestic_sign: @dive_rating.domestic_sign, mirror: @dive_rating.mirror, pbr: @dive_rating.pbr, pickeled: @dive_rating.pickeled, smoking: @dive_rating.smoking, sweet_caroline: @dive_rating.sweet_caroline, urinal_cake: @dive_rating.urinal_cake, wash_hands: @dive_rating.wash_hands, writing_wall: @dive_rating.writing_wall } }
    assert_redirected_to dive_rating_url(@dive_rating)
  end

  test "should destroy dive_rating" do
    assert_difference('DiveRating.count', -1) do
      delete dive_rating_url(@dive_rating)
    end

    assert_redirected_to dive_ratings_url
  end
end
