    class UsersController < ApplicationController

      def index
          users = User.all
          render json: users
      end

      def show
        user = User.find(id: params[:id])
        render json: user
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
        user = User.find(id: params[:id])
        if user.update!(user_params)
          render json: user
        else
          render json: { error: user.errors.messages }, status: 422
        end
      end

      def destroy
        user = User.find(id: params[:id])
        if user.destroy
          head :no_content
        else
          render json: { error: "User not found" }, status: 422
        end
      end
          

      private
    
      def user_params
        params.permit(:name, :dob, :email)
      end

      # def options
      #   @options ||= {include: %i[reviews]}
      # end
      # this method will be added to index/update called as second argument for our serializer

    end
  end
end