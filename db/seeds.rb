require "faker"

15.times do
  User.create([{
    name: Faker::Name.unique.name,
    dob: Faker::Date.birthday(min_age: 18, max_age: 110),
    email: Faker::Internet.email,
    password_digest: Faker::Internet.password(min_length: 10, max_length: 20),
    username: Faker::Internet.username(specifier: 5..10)


  }])
end

House.create(name: "Villa David Chipperfield Nord", address: "Gardone Riviera, Lombardia, Italy", pet: "Dog", house_url: "https://a0.muscache.com/im/pictures/monet/Luxury-553449454187790697/original/475750f4-33de-4e1d-bbd7-f1939896ce9c?im_w=960")
House.create(name: "Chalets Micro-Element", address: "Lac-Beauport, Quebec, Canada", pet: "Cat", house_url: "https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/9bd67185-dc83-4473-a191-9486c62aec66.jpeg?im_w=480")
House.create(name: "Kellogg Doolittle House", address: "Joshua Tree, California, United States", pet: "Snake", house_url: "https://a0.muscache.com/im/pictures/1f6c495e-b877-4a48-9f2c-d8012f640166.jpg?im_w=960")
House.create(name: "ATELIER", address: "Uvita, Osa , Puntaneras, Costa Rica", pet: "Parrot", house_url: "https://a0.muscache.com/im/pictures/751e1606-5d0d-44a9-aa8f-c5c62cf32481.jpg?im_w=960")
House.create(name: "La Tagua", address: "Navidad, Chile", pet: "Hamster", house_url: "https://a0.muscache.com/im/pictures/335cda3d-4fb3-4572-bd40-09b5b7e90ede.jpg?im_w=960")
House.create(name: "Mirrored Glass Cabin", address: "Rælingen, Akershus, Norway", pet: "Dog", house_url: "https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=480")
House.create(name: "Container", address: "Terrasini, Sicilia, Italy", pet: "Dog", house_url: "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3d966c94-4c87-479b-8eeb-4889e9fb6ac9.jpeg?im_w=960")
House.create(name: "Costa Azul Surf", address: "San Jose del Cabo, Baja California Sur, Mexico", pet: "Cat", house_url: "https://a0.muscache.com/im/pictures/miso/Hosting-42742665/original/0f2e2367-cffb-4a78-bffb-440ef1d6820a.jpeg?im_w=480")
House.create(name: "Lakefront Shipping Container", address: "Inglis, Manitoba, Canada", pet: "Fish", house_url: "https://a0.muscache.com/im/pictures/2a1ef0d3-1427-4f9c-a2ff-82e822caf39d.jpg?im_w=480")
House.create(name: "The Wave Lambertville", address: "Lambertville, New Jersey, United States", pet: "Ferret", house_url: "https://a0.muscache.com/im/pictures/miso/Hosting-46327689/original/60cdde02-16c8-4db6-9966-fb2a3c19a9c0.jpeg?im_w=960")



  Booking.create(start_date: 07/23/22, end_date: 07/29/22, user_id: 65, house_id: 1) 
  Booking.create(start_date: 08/23/22, end_date: 08/29/22, user_id: 66, house_id: 2) 
  Booking.create(start_date: 09/23/22, end_date: 09/29/22, user_id: 64, house_id: 2) 
  Booking.create(start_date: 10/23/22, end_date: 10/29/22, user_id: 63, house_id: 3) 
  Booking.create(start_date: 11/23/22, end_date: 11/29/22, user_id: 62, house_id: 3) 
  Booking.create(start_date: 12/23/22, end_date: 12/29/22, user_id: 66, house_id: 4) 
  Booking.create(start_date: 12/01/22, end_date: 12/10/22, user_id: 60, house_id: 8) 
  Booking.create(start_date: 12/11/22, end_date: 12/20/22, user_id: 66, house_id: 5) 
  Booking.create(start_date: 07/23/22, end_date: 08/29/22, user_id: 66, house_id: 7) 
  Booking.create(start_date: 08/23/22, end_date: 09/23/22, user_id: 66, house_id: 6) 
