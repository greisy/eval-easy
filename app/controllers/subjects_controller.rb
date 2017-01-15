class SubjectsController < ApplicationController
  before_action :set_models, only: [:index]

  def index
    @subjects =  @institution.subjects
    render json: subjects, status: 200
  end

  def create
    debugger
    
  end
  private

  def set_models
    @institution = Institution.find params[:institution_id]
  end
end
