class User < ApplicationRecord
    has_many :bookings
    
    validates_presence_of :email
    validates_uniqueness_of :email
    validates :name, presence: true, length: { maximum: 50 }
    validates :username, presence: true, uniqueness: true

end
