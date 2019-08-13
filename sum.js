/*function sum(){
    var total =  Array.prototype.slice.call(arguments).reduce(function(a, b) { 
    return a + b; 
    }, 0);
    return total;
 }
console.log(sum(1,2,7)); 
console.log(sum(1,4));
console.log(sum(11));
console.log(sum(10,3,6,7,9));
*/

function sum() {
    var sum =0;
    for (var i=0; i < arguments.length; i++){
        sum += arguments[i];
    } 
    console.log(sum);
}

sum(1,2,7);
sum(1,4);
sum(11);
sum(10,3,6,7,9);