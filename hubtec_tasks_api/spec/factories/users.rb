FactoryBot.define do
  factory :user do
    email { FFaker::Internet.unique.email }
    password_faker = FFaker::Internet.unique.password
    password { password_faker }
    password_confirmation { password_faker }
  end
end
