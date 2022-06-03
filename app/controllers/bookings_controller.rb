class BookingsController < ApplicationController
    def index 
        render json: current_user.Bookings 
    enb

    def create 
        b = Booking.create!(:user_id)
        current_user.bookings << b 
    end

    def destroy 
        booking = Booking.find(params[:id])
        if booking.destroy
          head :no_content
        else
          render json: { error: "Booking not found" }, status: 422
        end
    end
end
