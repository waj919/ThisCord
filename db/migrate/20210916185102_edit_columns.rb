class EditColumns < ActiveRecord::Migration[6.1]
  def change
    rename_column :dm_channels, :user1_id, :user1
    rename_column :dm_channels, :user2_id, :user2
  end
end
