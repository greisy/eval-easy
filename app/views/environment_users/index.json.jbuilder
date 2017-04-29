json.array! @evaluator_agents do |evaluator_agent|
  json.id evaluator_agent.user.id
  json.name evaluator_agent.user.name
  json.last_name evaluator_agent.user.last_name
  json.identity_card evaluator_agent.user.identity_card
  json.phone evaluator_agent.user.phone
  json.document_type_id evaluator_agent.user.document_type_id
  json.document_type_code evaluator_agent.user.document_type.code
  json.email evaluator_agent.user.email
  json.environment_user_id evaluator_agent.id
end