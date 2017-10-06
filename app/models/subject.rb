class Subject < ActiveRecord::Base
  #belongs_to :scale
  belongs_to :environment
  has_many :academic_terms
  has_many :range_date_terms, through: :academic_terms
  #validates :code, uniqueness: true, presence: true
  #validates :name, presence: true, uniqueness: true
  validates :name, presence: true,uniqueness: { scope: :environment_id }
  validates :code, presence: true,uniqueness: { scope: :environment_id } 
  #validates :scale_id, presence: true
  validates :grade_to_pass, allow_nil: true, allow_blank: true, numericality: { only_integer: true }


end
