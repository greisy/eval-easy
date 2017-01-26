class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.string :code
      t.string :name
      t.text :description
      t.integer :credits
      t.references :scale, index: true, foreign_key: true
      t.integer :grade_to_pass
      t.boolean :round_up, default: false
      t.references :institution, index: true, foreign_key: true

      t.timestamps null: false
    end
    add_index :subjects, [:institution_id, :code, :name], unique: true
  end
end
