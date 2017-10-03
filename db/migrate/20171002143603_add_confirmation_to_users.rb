class AddConfirmationToUsers < ActiveRecord::Migration
  def up
  	add_column :users, :confirmed_account, :boolean, :default => false
  end
  def down
  	remove_column :users, :confirmed_account
  end
end
