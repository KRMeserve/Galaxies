# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


CREATE TABLE galaxies (id SERIAL, name VARCHAR(40), distance VARCHAR(30), radius VARCHAR(30), date_discovered INT, img VARCHAR(150), shape VARCHAR(40));
INSERT INTO galaxies (name, distance, radius, date_discovered, img) VALUES ('Andromeda', '2.537 Million Light Years', '110,000 Light Years', 1764, 'https://upload.wikimedia.org/wikipedia/commons/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg');
SELECT * FROM galaxies;
