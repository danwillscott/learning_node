console.log('ham sammy');


var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
x.push(100);
for(var y = 0; y < x.length; y+=1){
    console.log(x[y]);
}

x = ["hello", "world", "JavaScript is Fun"];
console.log(x);

var sum = 0;
for(var k = 0; k < 501; k +=1){
    sum += k;

    if(k === 500){
        console.log(sum)
    }
}

var min;
var average;
var arrayToCheck = [1, 5, 90, 25, -3, 0];
sum = 0;
for(var q = 0; q < arrayToCheck.length; q += 1){
    if(!min){min = arrayToCheck[0];}
    sum += arrayToCheck[q];
    if(arrayToCheck[q] < min){
        min = arrayToCheck[q];
    }
    console.log(q);
    if(q == arrayToCheck.length - 1){
        average = sum / (arrayToCheck.length - 1);
    }
}
console.log(average);
console.log(min);
console.log(sum);


var newNinja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript', //like that's even a question!
    dojo: 'Dallas'
};

for (var i in newNinja){
    console.log(i);
}