# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  creator_id :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord

    validates :creator_id, :name, presence: true

    belongs_to :owner,
        foreign_key: :creator_id,
        class_name: :User

    has_many :user_servers,
        foreign_key: :server_id,
        class_name: :UserServers

    has_many :user,
        through: :user_servers,
        source: :user
        

    has_many :channels,
        foreign_key: :server_id,
        class_name: :Channel
end
