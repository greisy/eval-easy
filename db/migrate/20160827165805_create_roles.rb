class CreateRoles < ActiveRecord::Migration
  def change
    create_table :roles do |t|
      t.integer :permission_level
      t.string :description

      t.timestamps null: false
    end
  end
end
