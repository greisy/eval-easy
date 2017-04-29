class RolesController < ApplicationController
  def index
    roles =  Role.all
    render json: roles, status: 200
  end
end
