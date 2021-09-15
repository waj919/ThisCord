# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  sender_id  :integer          not null
#  channel_id :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Message < ApplicationRecord

    validates :body, :channel_id, :sender_id, presence: true

    belongs_to :channel 


    belongs_to :sender,
        foreign_key: :sender_id,
        class_name: :User
end

