class ApplicationController < ActionController::API
  before_action :authenticate_user
  skip_before_action :authenticate_user, only: [:submit_form, :generate_token]

  def index
    # Access the current authenticated user
    user = @current_user

    render json: { message: "Hello, #{user.username}!" }
  end

  def generate_token
    user_id = # obtain the user's unique identifier

    payload = { user_id: user_id }
    secret_key = Rails.application.secrets.jwt_secret_key
    token = JWT.encode(payload, secret_key)

    render json: { token: token }
  end

  def verify_token(token)
    secret_key = Rails.application.secrets.jwt_secret_key

    begin
      payload = JWT.decode(token, secret_key).first
      user_id = payload['user_id']

      # Perform additional verification or validation logic

      { valid: true, user_id: user_id }
    rescue JWT::DecodeError
      { valid: false }
    end
  end

  private

  def authenticate_user
    token = request.headers['Authorization']&.split(' ')&.last
    payload = verify_token(token)

    if payload[:valid]
      user_id = payload[:user_id]
      @current_user = User.find_by(id: user_id)
    else
      render json: { error: 'Invalid or expired token' }, status: :unauthorized
    end
  end
end