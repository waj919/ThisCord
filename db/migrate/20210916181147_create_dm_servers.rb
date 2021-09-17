class CreateDmServers < ActiveRecord::Migration[6.1]
  def change
    create_table :dm_channels do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
