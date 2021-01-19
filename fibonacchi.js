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