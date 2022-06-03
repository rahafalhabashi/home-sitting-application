class HousesController < ApplicationController
    def index
        houses = House.all
        render json: houses
    end

    def destroy 
        house = House.find(params[:id])
        if house.destroy
          head :no_content
        else
          render json: { error: "house not found" }, status: 422
        end
    end

end
