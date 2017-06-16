class AcademicTerm < ActiveRecord::Base
  belongs_to :range_date_term
  belongs_to :subject

  #validations
  validates :subject_id, presence: true, uniqueness: { scope: :range_date_term_id}


end
