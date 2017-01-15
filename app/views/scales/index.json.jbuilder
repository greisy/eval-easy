json.scales @scales do |scale|
  json.name scale.name
  json.minimum_grade scale.minimum_grade
  json.maximum_grade scale.maximum_grade
  json.grade_to_pass_default scale.grade_to_pass_default
  json.description scale.description
  json.alphabetic_scale scale.alphabetic_scale
  json.scale_type scale.scale_type.name
end