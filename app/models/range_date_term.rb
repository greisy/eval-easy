class RangeDateTerm < ActiveRecord::Base
  has_many :academic_terms, dependent: :destroy
  has_many :subjects, through: :academic_terms, dependent: :destroy
  belongs_to :environment

  #validations
  validates :name, presence: true,uniqueness: { scope: :environment_id }
  validates :start_date, :end_date, presence: true
  validates_date :start_date, before: :end_date
  validates_date :end_date, after: :start_date
end
