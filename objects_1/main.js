/**
 * Created by danielscott on 3/6/17.
 */

function VehicleConstructor(name, wheels, passangers) {
    this.name = name;
    this.wheels = wheels;
    this.passangers = passangers;

    this.sound = '';

    this.make_noise = function () {
        console.log(this.sound)
    };

    this.passanger_count = function () {
        console.log(this.passangers)
    }


}
bike = new VehicleConstructor('Bike', 2, 1);
bike.sound = 'Ring Ring!';
bike.make_noise();

car = new VehicleConstructor('Sedan', 4, 5);
car.sound = 'Honk Honk';
car.make_noise();


bus = new VehicleConstructor('Bus', 6, 1);

bus.passengers_pickup = function (people) {
    this.passangers += people;
};

bus.passengers_drop = function (people) {
    bus.passangers -= people
};
bus.passengers_pickup(100);
bus.passanger_count();
bus.passengers_drop(50);
bus.passanger_count();
