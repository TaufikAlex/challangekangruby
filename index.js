function indexprime(param1) {
    var count = 0;
    var number = 2;
   
    while (count < param1) {
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
            }
        }
        if(isPrime){
            count++;
        }
        number++;
    }
    return number - 1;
}
// console.log(indexprime(121));
console.log(indexprime(4));
console.log(indexprime(500));
console.log(indexprime(37786));
   // console.log(indexprime(141));