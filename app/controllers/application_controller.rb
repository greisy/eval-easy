class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception
  protect_from_forgery

	after_filter :set_csrf_cookie_for_ng
  before_action :configure_permitted_parameters, if: :devise_controller?

	def set_csrf_cookie_for_ng
	  cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
	end

  respond_to :html, :json
  
  def angular
    render 'layouts/application'
  end

  protected

  # In Rails 4.2 and above
  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:role_id, :identity_card, :name,:last_name, :phone, :institution_id, :document_type_id])
  end
  
end
