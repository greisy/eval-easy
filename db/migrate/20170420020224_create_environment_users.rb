class CreateEnvironmentUsers < ActiveRecord::Migration
  def change
    create_table :environment_users do |t|
      t.references :user, index: true, foreign_key: true
      t.references :role, index: true, foreign_key: true
      t.references :environment, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
