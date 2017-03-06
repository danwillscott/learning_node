/**
 * Created by danielscott on 3/5/17.
 */
console.log('Starting');

function runningLogger() {
    console.log('Im running like a boss')
}

function multiplyByTen(num) {
    return num * 10;
}

console.log(multiplyByTen(5));

function stringReturnsOne() {
    return 'This is a dumb function One';
}

function stringReturnsTwo() {
    return 'This is ANOTHER dumb function';
}


function caller(notFunction) {
    if(typeof(notFunction) === 'function'){
        console.log('A FUNCTION')
    }
    return notFunction
}

caller(stringReturnsOne);


function myDoubleConsoleLog(firstVal, secondVal) {
    console.log(firstVal);
    console.log(secondVal);
}

myDoubleConsoleLog(stringReturnsOne(), stringReturnsTwo());


function caller2(notFunction) {
    if(typeof(notFunction) === 'function'){
        console.log("starting");
        setTimeout(function () {
            console.log('Ending?')
        }, 2000);
    }
    return notFunction
}

caller2(multiplyByTen);
