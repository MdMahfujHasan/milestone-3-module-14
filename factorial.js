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