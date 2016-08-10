class Institution < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  validates :address, presence: true, uniqueness: true
  validates :phone, presence: true, uniqueness: true
end
