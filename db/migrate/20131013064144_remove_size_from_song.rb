class RemoveSizeFromSong < ActiveRecord::Migration
  def change
    remove_column :songs, :size, :string
  end
end
