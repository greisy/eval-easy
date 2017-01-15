class Scale < ActiveRecord::Base
  belongs_to :scale_type
  validate :max_grade_must_greater_than_min_grade

  def max_grade_must_greater_than_min_grade
    if self.minimum_grade > self.maximum_grade
      errors.add(:minimum_grade, "La calificación minima debe ser menor que la calificación maxima") 
    end
  end
end
