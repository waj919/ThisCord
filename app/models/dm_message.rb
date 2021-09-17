# == Schema Information
#
# Table name: dm_messages
#
#  id            :bigint           not null, primary key
#  sender_id     :integer          not null
#  dm_channel_id :integer          not null
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class DmMessage < ApplicationRecord

    validates :sender_id, :dm_channel_id, :body, presence: true


    belongs_to :dm_channel,
        foreign_key: :dm_channel_id,
        class_name: :DmChannel

    belongs_to :user,
        foreign_key: :sender_id,
        class_name: :User

        
end
