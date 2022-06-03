class User < ApplicationRecord
  has_secure_password

  has_many :bookings

  validates_presence_of :email
  validates_uniqueness_of :email
  validates :name, presence: true, length: { maximum: 50 }

  validates :password, presence: true, length: { in: 6..20 }
  validates :dob, presence: true

  private

  def validate_age
    if dob.present? && dob > 18.years.ago.to_i
      errors.add(:dob, "You should be over 18 years old.")
    end
  end
end
