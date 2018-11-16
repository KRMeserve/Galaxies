# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  CREATE TABLE galaxies (id SERIAL, name VARCHAR(40), distance VARCHAR(30), radius VARCHAR(30), date_discovered INT, img VARCHAR(150), shape VARCHAR(40));
  INSERT INTO galaxies (name, distance, radius, date_discovered, img, shape) VALUES ('Andromeda Galaxy', '2.537 Million Light Years', '110,000 Light Years', 1764, 'https://goo.gl/aWnc9g', 'elliptical');
  INSERT INTO galaxies (name, distance, radius, date_discovered, img) VALUES ('The Sombrero Galaxy', '28 Million Light Years', '25,000 Light Years', 1781, 'https://goo.gl/43wHFG', 'spiral');
  INSERT INTO galaxies (name, distance, radius, date_discovered, img) VALUES ('The Whirlpool Galaxy', '31 Million Light Years', '30,000 Light Years', 1773, 'https://goo.gl/6bfq2u', 'spiral');
  INSERT INTO galaxies (name, distance, radius, date_discovered, img) VALUES ('Galaxy NGC 1512', '30 Million Light Years', '35,000 Light Years', 2001, 'https://goo.gl/qvwpG7', 'barred spiral');
  
