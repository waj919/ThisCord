class CreateDmMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :dm_messages do |t|
      t.integer :sender_id, null: false
      t.integer :dm_channel_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :dm_messages, :sender_id
    add_index :dm_messages, :dm_channel_id
  end
end
