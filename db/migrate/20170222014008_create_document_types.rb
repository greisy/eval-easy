class CreateDocumentTypes < ActiveRecord::Migration
  def change
    create_table :document_types do |t|
      t.string :code
      t.text :description

      t.timestamps null: false
    end
  end
end
