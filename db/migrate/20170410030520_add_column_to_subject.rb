class AddColumnToSubject < ActiveRecord::Migration
  def change
    add_reference(:subjects, :environment)
    add_column :subjects, :start_date, :date
    add_column :subjects, :end_date, :date
  end
end
