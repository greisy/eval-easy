json.array! @environment_users do |environment_user|
  json.id environment_user.user.id
  json.name environment_user.user.name
  json.last_name environment_user.user.last_name
  json.identity_card environment_user.user.identity_card
  json.phone environment_user.user.phone
  json.document_type_id environment_user.user.document_type_id
  json.document_type_code environment_user.user.document_type.code
  json.email environment_user.user.email
  json.environment_user_id environment_user.id
end