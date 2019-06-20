FactoryBot.define do
  factory :task do
    name { FFaker::NameBR.unique.name }
    description { FFaker::Lorem.unique.phrase }
    end_time { FFaker::Time.date }
    trait :with_user do
      user_id { create(:user).id }
    end
    trait :to_do do
      status { 0 }
    end
    trait :in_progress do
      status { 1 }
    end
    trait :done do
      status { 2 }
    end
  end
end
