class BreweryRatingsController < ApplicationController
  before_action :set_brewery_rating, only: [:show, :edit, :update, :destroy]

  # GET /brewery_ratings
  # GET /brewery_ratings.json
  def index
    @brewery_ratings = BreweryRating.all
  end

  # GET /brewery_ratings/1
  # GET /brewery_ratings/1.json
  def show
  end

  # GET /brewery_ratings/new
  def new
    @brewery_rating = BreweryRating.new
  end

  # GET /brewery_ratings/1/edit
  def edit
  end

  # POST /brewery_ratings
  # POST /brewery_ratings.json
  def create
    @brewery_rating = BreweryRating.new(brewery_rating_params)

    respond_to do |format|
      if @brewery_rating.save
        format.html { redirect_to @brewery_rating, notice: 'Brewery rating was successfully created.' }
        format.json { render :show, status: :created, location: @brewery_rating }
      else
        format.html { render :new }
        format.json { render json: @brewery_rating.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /brewery_ratings/1
  # PATCH/PUT /brewery_ratings/1.json
  def update
    respond_to do |format|
      if @brewery_rating.update(brewery_rating_params)
        format.html { redirect_to @brewery_rating, notice: 'Brewery rating was successfully updated.' }
        format.json { render :show, status: :ok, location: @brewery_rating }
      else
        format.html { render :edit }
        format.json { render json: @brewery_rating.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /brewery_ratings/1
  # DELETE /brewery_ratings/1.json
  def destroy
    @brewery_rating.destroy
    respond_to do |format|
      format.html { redirect_to brewery_ratings_url, notice: 'Brewery rating was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_brewery_rating
      @brewery_rating = BreweryRating.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def brewery_rating_params
      params.require(:brewery_rating).permit(:ipa, :apa, :ale, :hefe, :porter, :stout, :pale, :blonde, :pilsner, :growler, :crowler, :rail)
    end
end
