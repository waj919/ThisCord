class EditChannels < ActiveRecord::Migration[6.1]
  def change
    remove_column :dm_channels, :name
  end
end
