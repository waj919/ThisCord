class RemoveColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :messages, :server_id
  end

end
