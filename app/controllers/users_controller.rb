require 'jwt'

class UsersController < ApplicationController
  def redirect_with_token
    # Logic to handle the code scanning and redirection
    # Retrieve necessary information from the scanned code

    scanned_data = params[:scanned_data]

    # Assuming you have a QRCode model and qr_code_data represents the scanned data
    qr_code = QrCode.find_by(data: scanned_data)

    if qr_code
      user_id = qr_code.user_id

      # Generate JWT token
      token = generate_jwt_token(user_id)

      redirect_to form_url(token: token)
    else
      # Handle the scenario where the QR code is not valid
      redirect_to invalid_token_url
    end
  end

  def form
    token = params[:token]
    payload = verify_jwt_token(token)

    if payload.present?
      @user_id = payload[:user_id]
      # Additional logic if needed
    else
      redirect_to invalid_token_url
    end
  end

  def submit_form
    # Retrieve the form data and process it as needed
    user = User.new(user_params)

    if user.save
      render json: { success: true }
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:carNumberPlate, :ownerNames, :phoneNumber)
  end
  def qr_code_data
    params[:qr_code_data] # Update with the actual parameter name representing the scanned data
  end

  def generate_jwt_token(user_id)
    # Generate a JWT token based on the user ID
    secret_key = Rails.application.credentials.secret_key_base
    payload = { user_id: user_id }
    JWT.encode(payload, secret_key, 'HS256')
  end

  def verify_jwt_token(token)
    # Verify and decode the JWT token
    secret_key = Rails.application.credentials.secret_key_base
    JWT.decode(token, secret_key, true, algorithm: 'HS256').first
  rescue JWT::DecodeError
    nil
  end
end