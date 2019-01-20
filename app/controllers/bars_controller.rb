class BarsController < ApplicationController
  before_action :set_bar, only: [:show, :edit, :update, :destroy]

  # GET /bars
  # GET /bars.json
  # def index

    # filter = params[:filter]

    # # get all the bars
    # all_bars = Bar.all.order(:kind) #Kind?

    # # make some json to return
    # render json: {
    #   bars: all_bars.map do | bar |
    #     {
    #       id: bar.id,
    #       bar_name: bar.name,
    #       address: bar.location,
    #       rating: bar.bar_star, #Need One Rating like overall_rating
    #       hours: bar.hours,
    #       latitude: bar.latitude,
    #       longitude: bar.longitude,
    #       type_of_bar: bar.kind
    #     }
    #   end
    # }
    
    

    # if filter
    #   @bars = all_bars.
    #   where("bar ?", "%{filter}")
    # else
    #   @bars = all_bars
    # end

    def index
      @bars = Bar.all
      latitude = params[:latitude]
      longitude = params[:longitude]
      name = params[:name]
      address = params[:location]
      phone = params[:phone]
      rating = params[:rating]
      hours = params[:hours]
      kind = params[:kind]
  
      if latitude && longitude
        all_the_bars = Bar.near([latitude, longitude])
      else
        # get all the locations
        all_the_bars = Bar.all
      end
  
      # make some json to return
      render json: {
          bars: all_the_bars.map do | bar |
            {
              id: bar.id,
              name: bar.name,
              address: bar.location,
              rating: bar.rating, #Need One Rating like overall_rating
              hours: bar.hours,
              latitude: bar.latitude,
              longitude: bar.longitude,
              kind: bar.kind
            }
          end
        end
      } 
    end
  end

      
  # GET /bars/1
  # GET /bars/1.json
  def show
  end

  # GET /bars/new
  def new
    @bar = Bar.new
  end

  # GET /bars/1/edit
  def edit
  end

  # POST /bars
  # POST /bars.json
  def create
    @bar = Bar.new(bar_params)

    respond_to do |format|
      if @bar.save
        format.html { redirect_to @bar, notice: 'Bar was successfully created.' }
        format.json { render :show, status: :created, location: @bar }
      else
        format.html { render :new }
        format.json { render json: @bar.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bars/1
  # PATCH/PUT /bars/1.json
  def update
    respond_to do |format|
      if @bar.update(bar_params)
        format.html { redirect_to @bar, notice: 'Bar was successfully updated.' }
        format.json { render :show, status: :ok, location: @bar }
      else
        format.html { render :edit }
        format.json { render json: @bar.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bars/1
  # DELETE /bars/1.json
  def destroy
    @bar.destroy
    respond_to do |format|
      format.html { redirect_to bars_url, notice: 'Bar was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bar
      @bar = Bar.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def bar_params
      params.require(:bar).permit(:name, :rating, :location, :latitude, :longitude, :phone, :hours, :kind)
    end
  end
end
