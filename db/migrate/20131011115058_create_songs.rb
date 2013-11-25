class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.text :description
      t.string :size
      t.time :duration

      t.timestamps
    end
  end
end
