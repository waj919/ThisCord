class RemoveColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :messages, :chat_id
  end
end
