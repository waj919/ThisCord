class CreateServers < ActiveRecord::Migration[6.1]
  def change
    create_table :servers do |t|
      t.integer :creator_id, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :servers, :creator_id
  end
end
