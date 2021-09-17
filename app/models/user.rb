# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    
    validates :username, :password_digest, :session_token, :email, presence: true
    validates :session_token, :email, uniqueness: true
    validates :password, length: { minimum: 6 , allow_nil: true}

    after_initialize :ensure_session_token

    attr_reader :password


    has_many :owned_servers,
        foreign_key: :creator_id,
        class_name: :Server

    has_many :user_servers,
        foreign_key: :user_id,
        class_name: :UserServers

    has_many :joined_servers,
        through: :user_servers,
        source: :server

    has_many :messages,
        foreign_key: :sender_id,
        class_name: :Message

    has_many :dms,
        foreign_key: :sender_id,
        class_name: :DmMessage

    has_one :user_1,
        foreign_key: :user1_id,
        class_name: :DmChannel

    has_one :user_2,
        foreign_key: :user2_id,
        class_name: :DmChannel


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end
