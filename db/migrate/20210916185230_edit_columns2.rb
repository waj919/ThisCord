class EditColumns2 < ActiveRecord::Migration[6.1]
  def change
    rename_column :dm_channels, :user1, :user1_id
    rename_column :dm_channels, :user2, :user2_id
  end
end
