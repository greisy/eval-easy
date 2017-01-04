class DegreesController < ApplicationController
  before_action :set_models, only: [:index]

  def index
    degrees = @institution.degrees
      #if phone = params[:phone]
      #  institutions = institutions.where(phone: phone)
      #end
    render json: degrees, status: 200  
    #respond_with(institutions, status: 200)
  end

  def create
    degree = Degree.new(degree_params)
=begin    respond_to do |format|
      debugger
      if degree.save
        format.json { render json:  degree.to_json }
      else
        format.json { render json: {degree_errors: degree.errors}, status: :unprocessable_entity }
      end
    end
=end
    if degree.save
      render json: degree, status: :created
    else
      render json: degree.errors, status: :unprocessable_entity
    end
end
  private
  def set_models
    @institution = Institution.find params[:institution_id]
  end
  def degree_params
    params.require(:degree).permit(:name, :description, :institution_id, :total_credit)
  end
end
