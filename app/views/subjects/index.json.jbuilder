json.array! @subjects do |subject|
  json.id subject.id
  json.code subject.code
  json.name subject.name
  json.description subject.description
  json.scale_id subject.scale_id
  json.grade_to_pass subject.grade_to_pass
  json.round_up subject.round_up
  json.scale do
    json.id subject.scale.id
    json.name subject.scale.name
    json.minimum_grade subject.scale.minimum_grade
    json.maximum_grade subject.scale.maximum_grade
    json.grade_to_pass_default subject.scale.grade_to_pass_default
    json.alphabetic_scale subject.scale.alphabetic_scale
    json.description subject.scale.description
    json.scale_type_id subject.scale.scale_type_id
    json.scale_type subject.scale.scale_type
  end
end