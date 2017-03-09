class EvaluatorAgentsController < ApplicationController
  def create
    evaluator_agent = User.new(evaluator_agent_params)
    evaluator_agent.document_type_id = document_type_params[:id]
    if evaluator_agent.save
      render json: evaluator_agent, status: :created
    else
      render json: evaluator_agent.errors, status: :unprocessable_entity
    end
  end
  def create_teachers
  end

  def evaluator_agent_params
    params.require(:evaluator_agent).permit(:name, :last_name, :identity_card, :phone, :institution_id, :role_id, :email, :password)
  end
  def document_type_params
    params.require(:document_type_id).permit(:id)
  end
end
