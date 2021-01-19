function inchToFeet (inch){
    var feet = inch/12;
    return feet;
}
var bunchOfFeet = [120, 280, 390];
var feet1 = inchToFeet(96);
console.log(feet1);
console.log(inchToFeet(84));
console.log(inchToFeet(bunchOfFeet[0]));

var name1 = 'mahfuj hasan munna'
if(name1.length > 5){
    name1 = 'mahfuj';
}
console.log(name1);
const country = 'Bangladesh';
console.log(country);
let age = 21;
var age = 22;
var age = 23;
console.log(age);

const year = 2021;
let remainder = year % 4;
if(remainder == 0){
    console.log(`it's a leap year`);
}
else{
    console.log(`it's not a leap year`);
}