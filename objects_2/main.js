/**
 * Created by danielscott on 3/6/17.
 */

function VehicleConstructor(name, wheels, passengers, speed) {
    //Private Vars
    var distance_travelled = 0;

    //Public Vars
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;

    this.sound = '';

    // this.

    function updateDistanceTravelled() {
        distance_travelled += speed
    }

    this.move = function () {
        updateDistanceTravelled();
        this.make_noise();
    };
    
    this.make_noise = function () {
        console.log(this.sound)
    };

    this.passenger_count = function () {
        console.log(this.passengers)
    };

    this.check_miles = function () {
        console.log(distance_travelled)
    }

}




// Bike instance of vehicle
bike = new VehicleConstructor('Bike', 2, 1, 10);
bike.sound = 'Ring Ring!';
bike.make_noise();
console.log('***** end bike *****');

// Car instance of vehicle
car = new VehicleConstructor('Sedan', 4, 5, 120);
car.sound = 'Honk Honk';
car.make_noise();
car.passenger_count();
car.move();
car.check_miles();
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
    bus.passengers -= people
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
console.log('***** end bus *****');


