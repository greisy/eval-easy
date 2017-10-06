class CreateAcademicTerms < ActiveRecord::Migration
  def change
    create_table :academic_terms do |t|
      t.references :range_date_term, index: true, foreign_key: true
      t.references :subject, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
