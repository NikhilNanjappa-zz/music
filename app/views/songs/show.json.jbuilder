json.extract! @song, :title, :description, :duration

json.genre @song.genre, :name