# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



user = [
    ['hesterbrown', 'hesterbrown@aim.com', '123456'],
    ['besthacker', 'besthacker@gmail.com',  '123456'],
    ['waj', 'waj@gmail.com', '123456'],
    ['demo', 'demo_user@gmail.com', '123456']
]


servers = [
    [1, "Gaming"],
    [2, "Studying"],
    [3, "Relaxing"],
    [1, "Coding"]
]



user_servers = [
    [ 4, 1],
    [ 4, 2],
    [ 4, 3],
    [ 1, 1],
    [ 1, 4],
    [ 2, 4],
    [ 2, 2],
    [ 3, 3],
    [ 3, 2]
]


user.each do |username, email, password|
    User.create!( username: username, email: email, password: password)
end

servers.each do |creator_id, name|
    Server.create!(creator_id: creator_id, name: name)
end

user_servers.each do |user_id, server_id| 
    UserServers.create!(user_id: user_id, server_id: server_id)
end
