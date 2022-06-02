class Booking < ApplicationRecord
  belongs_to :users_id
  belongs_to :houses_id
end
