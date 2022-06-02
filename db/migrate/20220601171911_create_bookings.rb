class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.date :start_date
      t.date :end_date
      t.belongs_to :users_id, null: false, foreign_key: true
      t.belongs_to :houses_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
