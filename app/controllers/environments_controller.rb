class EnvironmentsController < ApplicationController
  before_action :set_institution, only: [:create]
  before_action :set_user, only: [:index, :create]

  def create
    environment = Environment.new(user_id: @user.id, institution_id: @institution.id)
    if environment.save
      render json: environment, status: 201
    else
      render json: environment.errors, status: :unprocessable_entity
    end
  end

  def index
    render json: @user.environments.as_json(include: :institution), status: 200
  end

  private
  def set_institution
    @institution = Institution.find_by_name params[:institution_name]
    if @institution.nil?
      return @institution = Institution.create(name: params[:institution_name])
    end
  end
  def set_user
    @user = User.find params[:user_id]
  end
end

=begin
  def environment_params
    params.require(:environment).permit(:user_id)
  end
=end