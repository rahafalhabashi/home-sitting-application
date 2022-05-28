class UserSerializer
  include JSONAPI::Serializer
  attributes :name, :dob, :email

  # has_many :reviews
end

