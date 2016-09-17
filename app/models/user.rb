class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  ## ASSOCIATIONS
    belongs_to :role

  ## CALLBACKS
  before_create :set_role!

  ##METHODS
  private
  
  def set_role!
    
  end

end
