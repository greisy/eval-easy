class CreateDegrees < ActiveRecord::Migration
  def change
    create_table :degrees do |t|
      t.string :name
      t.text :description
      t.references :institution, index: true, foreign_key: true
      t.integer :total_credit

      t.timestamps null: false
    end
    add_index :degrees, [:name, :institution_id], unique: true
  end
end
