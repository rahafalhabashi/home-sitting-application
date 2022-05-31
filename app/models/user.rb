class User < ApplicationRecord
    
    has_many :accounts
    validates_presence_of :email
    validates_uniqueness_of :email
    validates :name, presence: true, length: { maximum: 50 }

end
