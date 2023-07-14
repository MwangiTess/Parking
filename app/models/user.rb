class User < ApplicationRecord
    validates :carNumberPlate, :ownerNames, :phoneNumber, presence: true
  
    def generate_qr_code_data
      "Car Number Plate: #{carNumberPlate}\nOwner's Official Names: #{ownerNames}\nPhone Number: #{phoneNumber}"
    end
  end