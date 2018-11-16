class GalaxiesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
    render json: Galaxy.all
  end

  def show
    render json: Galaxy.find(params["id"])
  end

  def create
    render json: Galaxy.create(params["galaxy"])
  end

  def delete
    render json: Galaxy.delete(params["id"])
  end

  def update
    render json: Galaxy.update(params["id"], params["galaxy"])
  end

end
