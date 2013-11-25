class Song < ActiveRecord::Base
	has_attached_file :song
	belongs_to :genre, :foreign_key => :genre_id

 def self.search(query)
	where("title like ?", "%#{query}%")
 end

 def self.sear(data, page)
  	paginate :per_page => 2, :page => page,
           :conditions => ['title like ?', "%#{data}%"],
           :order => 'title'
 end


end
