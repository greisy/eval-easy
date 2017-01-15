class ScalesController < ApplicationController
  def index
    scales = Scale.all
    render json: scales.as_json(include: :scale_type), status: 200
  end
end
