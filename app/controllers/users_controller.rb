    class UsersController < ApplicationController
      skip_before_action :authorized, only: [:index, :show, :create ]

      def index
          users = User.all
          render json: users
      end

      def show
        current_user = User.find_by(id: session[:user_id])
        render json: current_user
      end

      def create
        user = User.create!(user_params)
        if user
          render json: user
        else
          render json: { error: user.errors.messages }, status: 422
        end
      end

      def update
        user = User.find(params[:id])
        if user.update!(user_params)
          render json: user
        else
          render json: { error: user.errors.messages }, status: 422
        end
      end

      def destroy
        user = User.find(params[:id])
        if user.destroy
          head :no_content
        else
          render json: { error: "User not found" }, status: 422
        end
      end
          

      private
    
      def user_params
        params.permit(:name, :dob, :email, :password, :username)
      end
end