class CreateScales < ActiveRecord::Migration
  def change
    create_table :scales do |t|
      t.string :name
      t.integer :minimum_grade
      t.integer :maximum_grade
      t.integer :grade_to_pass_default
      t.text :description
      t.reference :scale_type

      t.timestamps null: false
    end
  end
end
