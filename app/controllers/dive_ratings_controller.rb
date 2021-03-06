class DiveRatingsController < ApplicationController
  before_action :set_dive_rating, only: [:show, :edit, :update, :destroy]
  protect_from_forgery except: :create

  # GET /dive_ratings
  # GET /dive_ratings.json
  def index

    filter = params[:filter]

    all_dive_ratings = DiveRating.all.order(:bar)

    if filter
      @dive_ratings = all_dive_ratings.
      where("bar ?", "%{filter}")
    else
      @dive_ratings = all_dive_ratings
    end

    @dive_ratings = DiveRating.all
  end

  # GET /dive_ratings/1
  # GET /dive_ratings/1.json
  def show
  end

  # GET /dive_ratings/new
  def new
    @dive_rating = DiveRating.new
  end

  # GET /dive_ratings/1/edit
  def edit
  end

  # POST /dive_ratings
  # POST /dive_ratings.json
  def create
    @dive_rating = DiveRating.new(dive_rating_params)

    respond_to do |format|
      if @dive_rating.save
        format.html { redirect_to @dive_rating, notice: 'Dive rating was successfully created.' }
        format.json { render :show, status: :created, address: @dive_rating }
      else
        format.html { render :new }
        format.json { render json: @dive_rating.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /dive_ratings/1
  # PATCH/PUT /dive_ratings/1.json
  def update
    respond_to do |format|
      if @dive_rating.update(dive_rating_params)
        format.html { redirect_to @dive_rating, notice: 'Dive rating was successfully updated.' }
        format.json { render :show, status: :ok, address: @dive_rating }
      else
        format.html { render :edit }
        format.json { render json: @dive_rating.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /dive_ratings/1
  # DELETE /dive_ratings/1.json
  def destroy
    @dive_rating.destroy
    respond_to do |format|
      format.html { redirect_to dive_ratings_url, notice: 'Dive rating was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dive_rating
      @dive_rating = DiveRating.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def dive_rating_params
      params.require(:dive_rating).permit(:bar_id, :cd_jukebox, :sweet_caroline, :pickeled, :dollar_bills, :writing_wall, :mirror, :pbr, :domestic_sign, :wash_hands, :urinal_cake, :smoking, :dart_board)
    end
end
