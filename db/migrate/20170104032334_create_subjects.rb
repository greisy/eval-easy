class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.string :code
      t.string :name
      t.text :description
      t.references :scale, index: true, foreign_key: true
      t.integer :grade_to_pass
      t.boolean :round_up, default: false

      t.timestamps null: false
    end
  end
end
