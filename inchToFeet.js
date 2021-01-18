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

function leapYear(year){
let rem1 = year % 4;
if(rem1 == 0){
    let rem2 = year % 100;
    if(rem2 == 0){
        let rem3 = year % 400;
        if(rem3 == 0){
            console.log('leap year');
        }
        else{
            console.log('not leap year');
        }
    }
    else{
        console.log('leap year');
    }
}
else{
    console.log('not leap year');
}
}
leapYear(1700);

var facto = 1;
for(i = 1; i <= 5; i++){
    facto = facto * i;
}
console.log(facto);

function facto(n){
    facto = 1;
    for(i =1; i <= n; i++){
        facto = facto * i;
    }
    return facto;
}
result = facto(10);
console.log(result);

function factorial(n){
    var i = 1;
    var facto = 1;
    while(i <= n){
        facto = facto * i;
        i++;
    }
    return facto;
}
var result = factorial(5);
console.log(result);

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var result = factorial(7);
console.log(result);

var fibo = [0,1];
for(i=2; i<=10; i++){
    fibo[i] = fibo [i-1] + fibo [i-2];
}
console.log(fibo);

function fibonacci(n){
    var fibo = [0,1];
    for(i=2; i<=n; i++){
        fibo[i] = fibo[i-1]  + fibo[i-2];
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);

function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(55);
console.log(result);

function fibonacci(n){
    if(n = 0){
        return [0];
    }
    else if(n == 1){
        return [0, 1];
    }
    else{
        var febo = fibonacci(n-1);
        var nextElement = febo[n-1] + febo[n-2];
        febo.push(nextElement);
        return febo;
    }
}
var result = fibonacci(10);
console.log(result);

var n = 77;
function isPrime(n){
    for(i=2; i<= n-1; i++){
        // console.log(i, n%i);
        if(n%i == 0){
            return 'not a prime number';
        }
    }
    return 'prime number';
}
var result = isPrime(7);
console.log(result);

