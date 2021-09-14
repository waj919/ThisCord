class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.integer :server_id, null: false
      t.integer :chat_id, null: false
      t.integer :channel_id, null: false
      t.text :body, null: false

      t.timestamps

    end

    add_index :messages, :sender_id
    add_index :messages, :server_id
    add_index :messages, :chat_id
    add_index :messages, :channel_id
    
  end
end
