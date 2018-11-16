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
end
