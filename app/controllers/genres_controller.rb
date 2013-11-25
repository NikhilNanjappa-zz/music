class GenresController < ApplicationController
  def index
  end

  def new
  end

  def create
    @genre = Genre.new(params[:genre].permit(:name))
    @genre.save
    redirect_to @genre
  end

  def show
    @genre = Genre.find(params[:id])
  end
end
