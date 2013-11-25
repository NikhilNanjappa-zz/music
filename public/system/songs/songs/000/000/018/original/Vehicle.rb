module Automobile
def mileage
	puts "This is module"
end
end

class Vehicle include Automobile
mileage
end

class Bike < Vehicle
mileage
end

class Car < Vehicle
mileage
end

class Bus < Vehicle 
mileage
end