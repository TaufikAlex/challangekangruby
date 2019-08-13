function indexprime(param1) {
    //write your code here

    
    if (param1 == 2) {
        return true;
    }
    else if (param1 > 1) {
        for (var i = 2; i < param1; i++) {

            if (param1 % i != 0) {
                return true;
            }
            else if (param1 == i * i) {
                return false;
            }
            else {
                return false;
            }
        }
    } else {
        return false;
    }
}
console.log(indexprime(121));
console.log(indexprime(4));
console.log(indexprime(500));
console.log(indexprime(377876));
console.log(indexprime(141));