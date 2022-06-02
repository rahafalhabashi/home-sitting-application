class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  before_action :authorized
  include ActionController::Cookies
  # gives access to use cookies to all our controlers
  def authorized
    return render json: { error: "Not Authorized" }, status: :unauthorized
  end

  private

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end

  def render_not_found_response(invalid)
    render json: { errors: invalid }, status: :not_found
  end
end
