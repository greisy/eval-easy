class RangeDateTermsController < ApplicationController
  before_action :set_environment, only: [:index]
  def index

    unless @environment.nil?
      range_date_terms = @environment.range_date_terms
      render json: range_date_terms, status: 200
    else
      render json: {head: :unprocessable_entity}
    end
  end

  private
  def set_environment
    unless params[:environment_id] == "undefined"
      @environment = Environment.find params[:environment_id]
    end
  end
end
