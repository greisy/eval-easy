class User < ActiveRecord::Base

  ## ASSOCIATIONS
    belongs_to :role
    belongs_to :institution
  ## VALIDATIONS
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable
  validates :identity_card, uniqueness: true, presence: true
  validates :name, presence: true
  validates :last_name, presence: true
  
  ## CALLBACKS

  ##METHODS
  private


end
