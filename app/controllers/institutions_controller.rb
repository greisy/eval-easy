class InstitutionsController < ApplicationController
  before_action :set_institution, only: [:show]
  #respond_to :json
  
  def index
    institutions = Institution.all
      #if phone = params[:phone]
      #  institutions = institutions.where(phone: phone)
      #end
    render json: institutions, status: 200  
    #respond_with(institutions, status: 200)
  end
  def show
    render json: @institution, status: 200
  end
  def new
    
  end
  def create

  end

  private
  def set_institution
    @institution = Institution.find params[:id]
  end
end



#-----
=begin 
method  show
        create
        update
=end

