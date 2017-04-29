class CreateEnvironments < ActiveRecord::Migration
  def change
    create_table :environments do |t|
      t.references :institution, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
