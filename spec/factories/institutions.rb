FactoryGirl.define do
  factory :institution do |f|
    f.name { Faker::University.name }
    f.address { Faker::Address.city }
    f.phone { Faker::PhoneNumber.phone_number }
  end
end
