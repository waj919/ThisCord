class AddColumns < ActiveRecord::Migration[6.1]
  def change
    add_column :dm_channels, :user1_id, :integer, null: false
    add_column :dm_channels, :user2_id, :integer, null: false

    add_index :dm_channels, :user1_id
    add_index :dm_channels, :user2_id
    
  end
end
