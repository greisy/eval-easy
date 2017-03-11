require 'roo'
class EvaluatorAgentsController < ApplicationController
  before_action :set_models, only: [:index]

  def index
    @teachers = User.evaluator_agents(@institution.id)
    render json: @teachers, status: 200
  end

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
    flag = true
    evaluator_agents = []
    invalid_evaluator_agents = []
    xls = Roo::Spreadsheet.open(params['file'].tempfile)
    x_sheet = xls.sheet('Teachers')
    header = x_sheet.row(1)
    (2..x_sheet.last_row).each do |i|
      teacher = {}
      current_row = Hash[[header, x_sheet.row(i)].transpose]
      identity_card = current_row["Cédula"]
      teacher['identity_card'] = identity_card.byteslice(1, identity_card.length)
      teacher['document_type_id'] = DocumentType.find_by_code(identity_card[0]).id
      teacher['name'] = current_row["Nombre"]
      teacher['last_name'] = current_row["Apellido"]
      teacher['phone'] = current_row["Teléfono"]
      teacher['email'] = current_row["Correo Electronico"]
      teacher['password'] = '123456789'
      evaluator_agent = User.new(teacher)
      evaluator_agent.institution_id = params[:institution_id]
      evaluator_agent.role_id = 3
      unless evaluator_agent.valid?
        invalid_evaluator_agent = {}
        invalid_evaluator_agent['line'] = i-1
        invalid_evaluator_agent['row'] = evaluator_agent.errors
        invalid_evaluator_agents.push(invalid_evaluator_agent)
      else
        evaluator_agents.push(evaluator_agent)
      end
    end
    unless invalid_evaluator_agents.empty?
      render json: { result: invalid_evaluator_agents}, status: :unprocessable_entity
    else
      evaluator_agents.each(&:save)
      render json: { result: "Success" }, status: :ok 
    end
  end


  private
  def set_models
    @institution = Institution.find params[:institution_id]
  end
  def evaluator_agent_params
    params.require(:evaluator_agent).permit(:name, :last_name, :identity_card, :phone, :institution_id, :role_id, :email, :password)
  end
  def document_type_params
    params.require(:document_type_id).permit(:id)
  end
end
