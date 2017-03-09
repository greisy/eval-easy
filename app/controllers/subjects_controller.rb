class SubjectsController < ApplicationController
  before_action :set_models, only: [:index]

  def index
    @subjects =  @institution.subjects
    render json: @subjects, status: 200
  end

  def create
    debugger
    subject = Subject.new(subject_params)
    subject.scale_id = scale_params[:id]
    if subject.save
      render json: subject, status: :created
    else
      render json: subject.errors, status: :unprocessable_entity
    end
  end
  private

  def set_models
    @institution = Institution.find params[:institution_id]
  end

  def subject_params
    params.require(:subject).permit(:code, :name, :description, :credits, :grade_to_pass, :round_up, :institution_id)
  end
  def scale_params
    params.require(:scale).permit(:id)
  end
end
