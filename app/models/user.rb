# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :tasks, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable

  include DeviseTokenAuth::Concerns::User
end
