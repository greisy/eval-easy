class RangeDateTerm < ActiveRecord::Base
  has_many :academic_terms
  has_many :subjects, through: :academic_terms
end
