class Student

def roll
	@roll
end
def roll=(val)
	@roll=val
end
def name
	@name
end
def name=(val)
	@name=val
end

def age
	@age
end
def age=(val)
	@age=val
end

def gender
	@gender
end
def gender=(val)
	@gender=val
end
end

class Enroll < Student

puts "Enter the number of students to enroll:"
n=Integer(gets.chomp)
s=Array.new(n)                       #creating an array of objects depending on the number of entries by the user

for i in 0..n-1
s[i] = Student.new                   #creating an object in the array "s" for each entry
s[i].roll=1 if i==0                  #assigning the roll id for the first iteration
s[i].roll=s[i-1].roll+1 if i>0       #auto generating roll id for the next iterations
puts "Enter the Name:"
na=gets.chomp
s[i].name=na
puts "Enter the Age:"
ag=Integer(gets.chomp)
s[i].age=ag
puts "Enter the Gender:"
ge=gets.chomp
s[i].gender=ge
end

puts "Sort based on? age/name/gender?"
params=gets.chomp
sort_array = Array.new
for i in 0..n-1
if(params=="name")
sort_array[i]=s[i].name
elsif(params=="age")
sort_array[i]=s[i].age
elsif(params=="gender")
sort_array[i]=s[i].gender
else
puts "Invalid entry"
end
end
puts "The sorted elements based on #{params} are:"
puts sort_array.sort
end
