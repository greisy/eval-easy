class AddColumnToUser < ActiveRecord::Migration
  def change
    add_reference(:users, :document_type)
    #add_column :users, :authorized, :boolean, default: true
  end
end
