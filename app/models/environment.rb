class Environment < ActiveRecord::Base
  belongs_to :institution
  belongs_to :user
  has_many :subjects, dependent: :destroy
  has_many :environment_users, dependent: :destroy
end
