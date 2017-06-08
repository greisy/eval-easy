class AcademicTerm < ActiveRecord::Base
  belongs_to :range_date_term
  belongs_to :subject
end
