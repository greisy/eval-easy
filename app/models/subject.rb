class Subject < ActiveRecord::Base
  belongs_to :scale

  validates :code, uniqueness: true, presence: true
  validates :name, presence: true, uniqueness: true
  validates :credits, presence: true
  validates :scale_id, presence: true
  validates :grade_to_pass, allow_nil: true, allow_blank: true, numericality: { only_integer: true }
end
