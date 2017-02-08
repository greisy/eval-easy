class Subject < ActiveRecord::Base
  belongs_to :scale

  #validates :code, uniqueness: true, presence: true
  #validates :name, presence: true, uniqueness: true
  validates :name, uniqueness: { scope: [:institution_id, :code]}
  validates :code, uniqueness: { scope: :institution_id, message: "El código de la asignatura debe ser único para la institución"}
  validates :credits, presence: true, numericality: { only_integer: true }
  validates :scale_id, presence: true
  validates :grade_to_pass, allow_nil: true, allow_blank: true, numericality: { only_integer: true }


end
