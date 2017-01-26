class Degree < ActiveRecord::Base
  ## Associations
  belongs_to :institution
  ## Validations
  #validates :name, presence: true, uniqueness: true
  validates :name, uniqueness: { scope: :institution_id }
  validates :institution_id, presence: true
  validates :total_credit, numericality: { only_integer: true }, allow_nil: true

end
