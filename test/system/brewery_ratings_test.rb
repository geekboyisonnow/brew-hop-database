require "application_system_test_case"

class BreweryRatingsTest < ApplicationSystemTestCase
  setup do
    @brewery_rating = brewery_ratings(:one)
  end

  test "visiting the index" do
    visit brewery_ratings_url
    assert_selector "h1", text: "Brewery Ratings"
  end

  test "creating a Brewery rating" do
    visit brewery_ratings_url
    click_on "New Brewery Rating"

    fill_in "Ale", with: @brewery_rating.ale
    fill_in "Apa", with: @brewery_rating.apa
    fill_in "Blonde", with: @brewery_rating.blonde
    fill_in "Crowler", with: @brewery_rating.crowler
    fill_in "Growler", with: @brewery_rating.growler
    fill_in "Hefe", with: @brewery_rating.hefe
    fill_in "Ipa", with: @brewery_rating.ipa
    fill_in "Pale", with: @brewery_rating.pale
    fill_in "Pilsner", with: @brewery_rating.pilsner
    fill_in "Porter", with: @brewery_rating.porter
    fill_in "Rail", with: @brewery_rating.rail
    fill_in "Stout", with: @brewery_rating.stout
    click_on "Create Brewery rating"

    assert_text "Brewery rating was successfully created"
    click_on "Back"
  end

  test "updating a Brewery rating" do
    visit brewery_ratings_url
    click_on "Edit", match: :first

    fill_in "Ale", with: @brewery_rating.ale
    fill_in "Apa", with: @brewery_rating.apa
    fill_in "Blonde", with: @brewery_rating.blonde
    fill_in "Crowler", with: @brewery_rating.crowler
    fill_in "Growler", with: @brewery_rating.growler
    fill_in "Hefe", with: @brewery_rating.hefe
    fill_in "Ipa", with: @brewery_rating.ipa
    fill_in "Pale", with: @brewery_rating.pale
    fill_in "Pilsner", with: @brewery_rating.pilsner
    fill_in "Porter", with: @brewery_rating.porter
    fill_in "Rail", with: @brewery_rating.rail
    fill_in "Stout", with: @brewery_rating.stout
    click_on "Update Brewery rating"

    assert_text "Brewery rating was successfully updated"
    click_on "Back"
  end

  test "destroying a Brewery rating" do
    visit brewery_ratings_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Brewery rating was successfully destroyed"
  end
end
