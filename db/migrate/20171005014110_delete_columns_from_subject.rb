class DeleteColumnsFromSubject < ActiveRecord::Migration
  def up
  	remove_column :subjects, :scale_id, :integer
  	remove_column :subjects, :grade_to_pass, :integer
  	remove_column :subjects, :start_date, :date
  	remove_column :subjects, :end_date, :date
  	remove_column :subjects, :round_up, :boolean
  end
  def down
  	add_reference :subjects, :scale, index: true, foreigner_key: true
  	add_column :subjects, :grade_to_pass, :integer
  	add_column :subjects, :start_date, :date
  	add_column :subjects, :end_date, :date
  	add_column :subjects, :round_up, :boolean
  end
end
