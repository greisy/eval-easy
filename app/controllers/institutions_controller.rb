class InstitutionsController < ApplicationController
  def index
    institutions = Institution.all
      #if phone = params[:phone]
      #  institutions = institutions.where(phone: phone)
      #end
    render json: institutions, status: 200
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

