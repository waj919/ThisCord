# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Channel < ApplicationRecord
    
    validates :server_id, :name, presence: true

    belongs_to :server
end
