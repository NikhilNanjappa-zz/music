class SongsController < ApplicationController

	def index
		@songs = Song.all
		
		if params[:search]
		  @songs = Song.search(params[:search]).order("created_at DESC")
		else
		  @songs = Song.order("created_at DESC")
		end

		 @songs = Song.sear(params[:data], params[:page])
		 
	end

	def new

	end

	def create
      @song = Song.new(params[:song].permit(:title, :description, :duration, :genre_id, :song))
	  @song.save
  	  redirect_to @song
	end

	def show
		@song = Song.find(params[:id])	
	end

	def download
		@download = Song.find(params[:id])
		send_file @download.song.path,
            :filename => @download.song_file_name,
            :type => @download.song_content_type,
            :disposition => 'attachment'
		flash[:notice] = "Your file has been downloaded"
    end

	private

  	def song_params
    	params.require(:song).permit(:title, :description, :duration)
  	end

end
