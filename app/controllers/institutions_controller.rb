class InstitutionsController < ApplicationController

  def index
    institutions = Institution.all
    render json: institutions, status: 200
  end

  private

end
