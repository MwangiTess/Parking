require 'jwt'

class AuthenticationController < ApplicationController
  def generate_token
    user_id = # obtain the user's unique identifier

    payload = { user_id: user_id }
    secret_key = Rails.application.secrets.jwt_secret_key
    token = JWT.encode(payload, secret_key)

    render json: { token: token }
  end

  def verify_token
    token = params[:token]
    secret_key = Rails.application.secrets.jwt_secret_key

    begin
      payload = JWT.decode(token, secret_key).first
      user_id = payload['user_id']

      # Perform additional verification or validation logic

      render json: { valid: true, user_id: user_id }
    rescue JWT::DecodeError
      render json: { valid: false }
    end
  end
end