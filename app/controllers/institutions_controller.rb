class InstitutionsController < ApplicationController
  #respond_to :json
  def index
    institutions = Institution.all
      #if phone = params[:phone]
      #  institutions = institutions.where(phone: phone)
      #end
    render json: institutions, status: 200  
    #respond_with(institutions, status: 200)
  end
  def new
    
  end
  def create

  end
end



#-----
=begin 
method  show
        create
        update
=end

