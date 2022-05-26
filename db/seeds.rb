require "faker"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

30.times do
  User.create([{
    name: Faker::Name.unique.name,
    dob: Faker::Date.birthday(min_age: 18, max_age: 110),
    email: Faker::Internet.email,
  }])
end
