class UsersController < ApplicationController

  def redirect_with_token
    # Logic to handle the code scanning and redirection
    # Retrieve necessary information from the scanned code

    # Assuming you have a QRCode model and qr_code_data represents the scanned data
    qrcode = QRCode.find_by(data: qr_code_data)

    if qrcode
      user_id = qrcode.user_id

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
end
