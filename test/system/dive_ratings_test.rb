require "application_system_test_case"

class DiveRatingsTest < ApplicationSystemTestCase
  setup do
    @dive_rating = dive_ratings(:one)
  end

  test "visiting the index" do
    visit dive_ratings_url
    assert_selector "h1", text: "Dive Ratings"
  end

  test "creating a Dive rating" do
    visit dive_ratings_url
    click_on "New Dive Rating"

    fill_in "Cd jukebox", with: @dive_rating.cd_jukebox
    fill_in "Dart board", with: @dive_rating.dart_board
    fill_in "Dollar bills", with: @dive_rating.dollar_bills
    fill_in "Domestic sign", with: @dive_rating.domestic_sign
    fill_in "Mirror", with: @dive_rating.mirror
    fill_in "Pbr", with: @dive_rating.pbr
    fill_in "Pickeled", with: @dive_rating.pickeled
    fill_in "Smoking", with: @dive_rating.smoking
    fill_in "Sweet caroline", with: @dive_rating.sweet_caroline
    fill_in "Urinal cake", with: @dive_rating.urinal_cake
    fill_in "Wash hands", with: @dive_rating.wash_hands
    fill_in "Writing wall", with: @dive_rating.writing_wall
    click_on "Create Dive rating"

    assert_text "Dive rating was successfully created"
    click_on "Back"
  end

  test "updating a Dive rating" do
    visit dive_ratings_url
    click_on "Edit", match: :first

    fill_in "Cd jukebox", with: @dive_rating.cd_jukebox
    fill_in "Dart board", with: @dive_rating.dart_board
    fill_in "Dollar bills", with: @dive_rating.dollar_bills
    fill_in "Domestic sign", with: @dive_rating.domestic_sign
    fill_in "Mirror", with: @dive_rating.mirror
    fill_in "Pbr", with: @dive_rating.pbr
    fill_in "Pickeled", with: @dive_rating.pickeled
    fill_in "Smoking", with: @dive_rating.smoking
    fill_in "Sweet caroline", with: @dive_rating.sweet_caroline
    fill_in "Urinal cake", with: @dive_rating.urinal_cake
    fill_in "Wash hands", with: @dive_rating.wash_hands
    fill_in "Writing wall", with: @dive_rating.writing_wall
    click_on "Update Dive rating"

    assert_text "Dive rating was successfully updated"
    click_on "Back"
  end

  test "destroying a Dive rating" do
    visit dive_ratings_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Dive rating was successfully destroyed"
  end
end
