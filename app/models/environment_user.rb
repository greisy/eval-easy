class EnvironmentUser < ActiveRecord::Base
  belongs_to :user
  belongs_to :role
  belongs_to :environment

  scope :users, -> (environment_id, kind_user) { where(environment_id: environment_id, role_id: Role.find_by_description(kind_user).id) }
end
