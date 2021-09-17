# == Schema Information
#
# Table name: dm_channels
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user1_id   :integer          not null
#  user2_id   :integer          not null
#
class DmChannel < ApplicationRecord
validates :user1_id, :user2_id, presence: true

    has_many :messages,
        foreign_key: :dm_channel_id,
        class_name: :DmMessage
        
    belongs_to :user_1, 
        foreign_key: :user1_id,
        class_name: :User
    
    belongs_to :user_2, 
        foreign_key: :user2_id,
        class_name: :User
        
end
