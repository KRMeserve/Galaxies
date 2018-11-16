class GalaxiesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        render json: Galaxy.all
    end

end
