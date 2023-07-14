class UserSerializer < ActiveModel::Serializer
  attributes :id, :carNumberPlate, :ownerNames, :phoneNumber
end
