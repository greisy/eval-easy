class Role < ActiveRecord::Base
  belongs_to :environment_user
end
