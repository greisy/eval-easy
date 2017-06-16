json.set! :academic_term do
  json.set! :range_date_term do
    json.id @range_date_term.id
    json.name @range_date_term.name
    json.start_date @range_date_term.start_date
    json.end_date @range_date_term.end_date
    json.environment_id @range_date_term.environment_id
  end
  json.set! :array do
    json.array! @academic_terms do |academic_term|
      json.id academic_term.id
      json.subject do
        json.id academic_term.subject.id
        json.code academic_term.subject.code
        json.name academic_term.subject.name
        json.description academic_term.subject.description
        json.scale do
          json.id academic_term.subject.scale.id
          json.name academic_term.subject.scale.name
          json.minimum_grade academic_term.subject.scale.minimum_grade
          json.maximum_grade academic_term.subject.scale.maximum_grade
          json.grade_to_pass_default academic_term.subject.scale.grade_to_pass_default
          json.alphabetic_scale academic_term.subject.scale.alphabetic_scale
          json.description academic_term.subject.scale.description
          json.scale_type_id academic_term.subject.scale.scale_type_id
          json.scale_type academic_term.subject.scale.scale_type
        end
        json.scale_id academic_term.subject.scale_id
        json.grade_to_pass academic_term.subject.grade_to_pass
        json.round_up academic_term.subject.round_up
      end
    end
  end
end
