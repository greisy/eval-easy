class User < ActiveRecord::Base

  ## ASSOCIATIONS
    has_many :environments, dependent: :destroy
    has_many :environment_users, dependent: :destroy
    belongs_to :document_type
  ## VALIDATIONS
  # Include default devise modules.thers available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, 
         :registerable,
         :confirmable,
         :recoverable, 
         :rememberable, 
         :trackable, :validatable
  validates :identity_card, uniqueness: true, presence: true
  validates :name, presence: true
  validates :last_name, presence: true
  
  ## CALLBACKS

  ## SCOPE

  scope :evaluator_agents, -> (institution_id) { where(institution_id: environment_id, role_id: Role.find_by_name("Docente").id) }

  ##METHODS

  private


end
