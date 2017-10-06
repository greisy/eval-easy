module RegistrationsHelper
	def check_recaptcha(secret, response_recaptcha)
		begin
			url = 'https://www.google.com/recaptcha/api/siteverify'
			response = RestClient.post "#{url}", {
				secret: secret,
				response: response_recaptcha
			}
			response = JSON.parse response unless response.blank?
			logger.info response
		rescue RestClient::ExceptionWithResponse => err
			err.response
		end

		return response
	end
	
	
end
