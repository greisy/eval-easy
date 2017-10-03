require 'roo'
class EnvironmentUsersController < ApplicationController
  before_action :set_environment, only: [:index, :create, :create_environment_users]
  before_action :set_environment_user, only: [:update, :destroy]
  def index
    @evaluator_agents = EnvironmentUser.users(@environment.id, params[:kind_user])
    #render json: evaluator_agents, status: 200
    respond_to do |format|
      format.json
    end
  end

  def create
    user = User.new(user_params)
    user.skip_confirmation!
    if user.save
      @environment_user = @environment.environment_users.new(role_id: role_params[:role_id], user_id: user.id)
      if @environment_user.save
        #DeviseMailer.confirmation_instructions(user, user.confirmation_token, {invitation: true, role: @environment_user.role.description}).deliver_now
        user.send_reset_password_instructions
        respond_to do |format|
          format.json
        end
      else
        render json: environment_user.errors, status: :unprocessable_entity
      end
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def create_environment_users
    # ActionController::Parameters.new( JSON.parse(params[:juridical_person]) )
    flag = true
    @users = []
    invalid_users = []
    xls = Roo::Spreadsheet.open(params['file'].tempfile)
    environment_user_params = ActionController::Parameters.new( JSON.parse(params['environment_user']) )
    #x_sheet = xls.sheet('Teachers')
    header = xls.row(1)
    (2..xls.last_row).each do |i|
      teacher = {}
      current_row = Hash[[header, xls.row(i)].transpose]
      identity_card = current_row["Cédula"]
      teacher['identity_card'] = identity_card.byteslice(1, identity_card.length)
      teacher['document_type_id'] = DocumentType.find_by_code(identity_card[0]).id
      teacher['name'] = current_row["Nombre"]
      teacher['last_name'] = current_row["Apellido"]
      teacher['phone'] = current_row["Teléfono"]
      teacher['email'] = current_row["Correo Electrónico"]
      teacher['password'] = '1122334455'
      user = User.new(teacher)
      unless user.valid?
        invalid_user = {}
        invalid_user['line'] = i-1
        invalid_user['row'] = user.errors
        invalid_users.push(invalid_user)
      else
        @users.push(user)
      end
    end
    unless invalid_users.empty?
      render json: { result: invalid_users }, status: :unprocessable_entity
    else
      @environment_users = []
      @users.each do |user|
        if user.save
          environment_user = @environment.environment_users.new(role_id: environment_user_params[:role_id], user_id: user.id)
          unless environment_user.save
            flag = false
          else
            @environment_users.push(environment_user)
          end
        end
      end
      respond_to do |format|
        format.json
      end
    end
  end

  def update
    user = @environment_user.user
    user.attributes = user_params
    respond_to do |format|
      if user.save
        format.json
      else
        format.json { render json: user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    user = @environment_user.user
    respond_to do |format|
      if user.destroy
        format.json { render json: user, status: 200 } 
      else
        format.json { render json: user.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def set_environment_user
    @environment_user = EnvironmentUser.find params[:id]
  end
  def set_environment
    @environment = Environment.find params[:environment_id]
  end
  def user_params
    params.require(:user).permit(:name, :last_name, :document_type_id, :identity_card, :email, :phone, :password) #:password
  end
  def role_params
    params.require(:environment_user).permit(:role_id)
  end
end
