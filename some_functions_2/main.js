/**
 * Created by danielscott on 3/5/17.
 */
var arrayToCheck = [1, 5, 90, 25, -3, 0];

function sum(x, y) {
    return x + y;
}

function minArray(arr) {
    var min = arr[0];
    for(var q = 0; q < arr.length; q += 1){
        if(arr[q] < min){
            min = arr[q];
        }
    }
    return min
}

function averageArray(arr) {
    var sum = 0;
    for(var q = 0; q < arr.length; q += 1){
        sum += arr[q];
        if(q == arr.length - 1){
            return (sum / (arr.length - 1));
        }
    }
}

var summing = function (x, y) {
    return x + y;
};

var minnie = function (arr) {
    var min = arr[0];
    for(var q = 0; q < arrayToCheck.length; q += 1){
        if(arrayToCheck[q] < min){
            min = arrayToCheck[q];
        }
    }
    return min
};

var averageThing = function (arr) {
    var sum = 0;
    for(var q = 0; q < arr.length; q += 1){
        sum += arr[q];
        if(q == arr.length - 1){
            return (sum / (arr.length - 1));
        }
    }
};

console.log('Regular functions');
console.log(sum(5,5));
console.log(minArray(arrayToCheck));
console.log(averageArray(arrayToCheck));
console.log('anonymous functions in vars');
console.log(summing(5,5));
console.log(minnie(arrayToCheck));
console.log(averageThing(arrayToCheck));

SomeMath = {

    sum: function (x, y) {
        return x + y;
    },


    minArray: function (arr) {
        var min = arr[0];
        for(var q = 0; q < arr.length; q += 1){
            if(arr[q] < min){
                min = arr[q];
            }
        }
        return min
    },

    averageArray: function (arr) {
        var sum = 0;
        for(var q = 0; q < arr.length; q += 1){
            sum += arr[q];
            if(q == arr.length - 1){
                return (sum / (arr.length - 1));
            }
        }
    }

};


OtherMath = function () {
    this.mathSumming = function (x, y) {
        return x + y;
    };

    this.mathMinnie = function (arr) {
        var min = arr[0];
        for(var q = 0; q < arrayToCheck.length; q += 1){
            if(arrayToCheck[q] < min){
                min = arrayToCheck[q];
            }
        }
        return min
    };

    this.mathAverageThing = function (arr) {
        var sum = 0;
        for(var q = 0; q < arr.length; q += 1){
            sum += arr[q];
            if(q == arr.length - 1){
                return (sum / (arr.length - 1));
            }
        }
    };
};

console.log('Object Methods Without This And cant be new');
console.log(SomeMath.sum(5,5));
console.log(SomeMath.minArray(arrayToCheck));
console.log(SomeMath.averageArray(arrayToCheck));
console.log('Object Methods This and New');

var holder = new OtherMath();
console.log(holder.mathSumming(5,5));
console.log(holder.mathMinnie(arrayToCheck));
console.log(holder.mathAverageThing(arrayToCheck));

Person = function (name) {
    this.name = name;
    this.travel_distance = 0;

    this.say_something = function (saying) {
        return this.name + ' says ' + saying
    };

    this.walk = function () {
        this.travel_distance += 3;
        return this.name + ' is walking distance so far ' + this.travel_distance
    };
    this.run = function () {
        this.travel_distance += 10;
        return this.name + ' is walking distance so far ' + this.travel_distance
    };
    this.crawl = function () {
        this.travel_distance += 1;
        return this.name + ' is walking distance so far ' + this.travel_distance
    };
};

// say_name - should alert the object’s name property
// say_something - have it accept a parameter. This function should then say for example
// “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1

person = new Person('Dan');
console.log(person.name);
console.log(person.travel_distance);
console.log(person.say_something('Hi guys'));
console.log(person.crawl());
console.log(person.walk());
console.log(person.run());



