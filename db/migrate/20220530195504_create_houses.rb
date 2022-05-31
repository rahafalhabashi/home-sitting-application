class CreateHouses < ActiveRecord::Migration[7.0]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :address
      t.string :pet
      t.string :house_url

      t.timestamps
    end
  end
end
