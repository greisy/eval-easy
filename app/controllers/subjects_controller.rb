class SubjectsController < ApplicationController
  before_action :set_models, only: [:index, :create]
  before_action :set_subject, only: [:update]

  def index
    @subjects =  @environment.subjects
    respond_to do |format|
      format.json 
    end
    #render json: @subjects.as_json(include: :scale), status: 200
    #render json: :index, status: :ok 
  end

  def create
    subject = @environment.subjects.create(subject_params)
    #subject.scale_id = scale_params[:id]
    if subject.save
      render json: subject, status: :created
    else
      render json: subject.errors, status: :unprocessable_entity
    end
  end

  def update
    @subject.attributes = subject_params
    @subject.scale_id = scale_params[:id]
    respond_to do |format|
      if @subject.save
        format.json
      else
        format.json { render json: @subject.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def set_models
    @environment = Environment.find params[:environment_id]
  end

  def set_subject
    @subject = Subject.find params[:id]
  end
  def subject_params
    params.require(:subject).permit(:code, :name, :description, :grade_to_pass, :round_up)
  end
  def scale_params
    params.require(:scale).permit(:id)
  end
end
