class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.string :code
      t.string :name
      t.text :description
      t.integer :credits
      t.references :scale, index: true, foreign_key: true
      t.integer :grade_to_pass

      t.timestamps null: false
    end
  end
end
