/**
 * Created by danielscott on 3/6/17.
 */

function VehicleConstructor(name, wheels, passengers, speed) {
    //Public Vars
    this.distance_travelled = 0;
    this.vin = Math.floor((Math.random() * 100000000000) + 1)
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    this.sound = '';

}

    VehicleConstructor.prototype.wheel_count = function () {
    console.log(this.wheels);
};

VehicleConstructor.prototype.updateDistanceTravelled = function() {
    this.distance_travelled += this.speed;
};

VehicleConstructor.prototype.move = function () {
    this.updateDistanceTravelled();
    this.make_noise();
};

VehicleConstructor.prototype.make_noise = function () {
    console.log(this.sound);
};

VehicleConstructor.prototype.passenger_count = function () {
    console.log(this.passengers);
};

VehicleConstructor.passenger_count = function () {
    console.log(this.passangers);
};

VehicleConstructor.prototype.check_miles = function () {
    console.log(this.distance_travelled);
};

VehicleConstructor.prototype.check_vin = function () {
    console.log(this.vin);
};


// Bike instance of vehicle
bike = new VehicleConstructor('Bike', 2, 1, 10);
bike.sound = 'Ring Ring!';
bike.make_noise();
bike.wheel_count();
console.log('***** end bike *****');

// Car instance of vehicle
car = new VehicleConstructor('Sedan', 4, 5, 120);
car.sound = 'Honk Honk';
car.make_noise();
car.passenger_count();
car.move();
car.check_miles();
car.check_vin();
car.wheel_count();
console.log('***** end car *****');
// Bus instance of vehicle
bus = new VehicleConstructor('Bus', 6, 1, 80);
bus.sound = 'beep beep';
// Adding pickup function for buss
bus.passengers_pickup = function (people) {
    this.passengers += people;
};
// Adding drop off function for buss
bus.passengers_drop = function (people) {
    bus.passengers -= people;
};
// Testing bus new functions
bus.passengers_pickup(100);
bus.passenger_count();
bus.passengers_drop(50);
bus.passenger_count();
bus.check_miles();
bus.move();
bus.move();
bus.move();
bus.move();
bus.check_miles();
bus.check_vin();
bus.wheel_count();
console.log('***** end bus *****');


