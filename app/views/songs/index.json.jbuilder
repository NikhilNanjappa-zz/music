json.array!(@songs) do |song|
  json.extract! song, :title, :description, :duration
  json.url song_url(song, format: :json)
end
