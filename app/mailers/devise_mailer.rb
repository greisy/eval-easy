class DeviseMailer < Devise::Mailer

  #before_action :add_inline_attachment

  def confirmation_instructions(record, token, options={})
    #if record.password=="11223344"
     # @role = options[:role]
     # options[:template_name] = 'activation_account'
    #else
    #  options[:template_name] = 'confirmation_instructions'
    #end
    super
  end

  def reset_password_instructions(record, token, options={})
    if record.password == "11223344"
      options[:template_name] = "activation_account"
    else
      options[:template_name] = "reset_password_instructions"
    end
    super
  end
=begin
  def activation_account(record, token, options={})
    debugger
    super
  end
=end
  private

  def add_inline_attachment
    attachments.inline['header.jpg'] = File.read("#{Rails.root}/app/assets/images/header.jpg")
    attachments.inline['footer.jpg'] = File.read("#{Rails.root}/app/assets/images/footer.jpg")
  end
end
