class CreateScaleTypes < ActiveRecord::Migration
  def change
    create_table :scale_types do |t|
      t.string :name
      t.string :description

      t.timestamps null: false
    end
  end
end
