class AddColumnToUser < ActiveRecord::Migration
  def change
    add_reference(:users, :document_type)
  end
end
