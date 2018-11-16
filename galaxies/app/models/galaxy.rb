class Galaxy
    DB = PG.connect({:host => 'localhost', :port => 5432, :dbname => 'galaxies_development'})

    def self.all
        results = DB.exec("SELECT * FROM galaxies;")
        return results.map do |result|
            {
                "id" => result["id"].to_i,
                "name" => result["name"],
                "distance" => result["distance"],
                "radius" => result["radius"],
                "date_discovered" => result["date_discovered"].to_i,
                "img" => result["img"],
                "shape" => result["shape"]
            }
        end
    end

    def self.find(id)
    results = DB.exec("SELECT * FROM galaxies WHERE id=#{id};")
    return
            {
                "id" => result["id"].to_i,
                "name" => result["name"],
                "distance" => result["distance"],
                "radius" => result["radius"],
                "date_discovered" => result["date_discovered"].to_i,
                "img" => result["img"],
                "shape" => result["shape"]
            }
    end

    def self.create(opts)
    results = DB.exec(
        <<-SQL
            INSERT INTO galaxies (name, distance, radius, date_discovered, img, shape)
            VALUES ( '#{opts["name"]}', '#{opts["distance"]}', '#{opts["radius"]}', #{opts["date_discovered"]}, '#{opts["img"]}', '#{opts["shape"]}' )
            RETURNING id, name, distance, radius, date_discovered, img, shape;
        SQL
      )
        return
            {
                "id" => results.first["id"].to_i,
                "name" => results.first["name"],
                "distance" => results.first["distance"],
                "radius" => results.first["radius"],
                "date_discovered" => results.first["date_discovered"].to_i,
                "img" => results.first["img"],
                "shape" => results.first["shape"]
            }
      end

      def self.delete(id)
          results = DB.exec("DELETE FROM galaxies WHERE id=#{id};")
          return { "deleted" => true }
      end

      def self.update(id, opts)
          results = DB.exec(
              <<-SQL
                  UPDATE galaxies
                  SET name='#{opts["name"]}', distance='#{opts["distance"]}', radius='#{opts["radius"]}', date_discovered=#{opts["date_discovered"]}, img='#{opts["img"]}', shape='#{opts["shape"]}'
                  WHERE id=#{id}
                  RETURNING id, name, distance, radius, date_discovered, img, shape;
              SQL
          )
          return
            {
                "id" => results.first["id"].to_i,
                "name" => results.first["name"],
                "distance" => results.first["distance"],
                "radius" => results.first["radius"],
                "date_discovered" => results.first["date_discovered"].to_i,
                "img" => results.first["img"],
                "shape" => results.first["shape"]
            }
      end

end
