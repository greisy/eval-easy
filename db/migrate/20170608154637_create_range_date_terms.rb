class CreateRangeDateTerms < ActiveRecord::Migration
  def change
    create_table :range_date_terms do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.references :environment, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
