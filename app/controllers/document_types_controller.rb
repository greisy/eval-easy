class DocumentTypesController < ApplicationController
  def index
    document_types = DocumentType.all
    render json: document_types, status: 200
  end


end
