/**
 * Created by danielscott on 3/5/17.
 */
    //problem one
var first_variable;
function firstFunc() {
    first_variable = "Not anymore!!!";
    console.log(first_variable);
}
console.log(first_variable);
first_variable = "Yipee I was first!";

console.log(first_variable);
//problem two
var food;
function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";       // CAREFUL!
    console.log(food);
}
food = "Chicken";
eat();
console.log(food);
//problem three

var new_word;
function lastFunc() {
    new_word = "old";
}
new_word = "NEW!";
console.log(new_word);
console.log('last thing');