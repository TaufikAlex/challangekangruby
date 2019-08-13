function stringManipulation(word) {
    var temp = word[0];
    if (temp == "a" || temp == "i" || temp == "u" || temp == "e" || temp == "o") {
        return word;
    }
    else {
        var hasil = word.substring(1) + word[0] + 'nyo'.slice(1);
        return hasil;
    }
}
    // if (word.slice("a","i","u","e","o")){
    //     console.log(word);

    // var string = word;
    // var res = string.substring(1);
    // var hasil = res + temp + "nyo";
    // return hasil;
    // var temp = word[0];
    // for(var i =0; i < temp.length; i++)



console.log(stringManipulation('ayam'));
console.log(stringManipulation('bebek'));
console.log(stringManipulation('kodok'));






// function stringManipulation(word) {
//     if(stringManipulation.length == 0) {
//         return 0;
//     }
//     var str 
//     let count =0;
//     for (let i =0; i < stringManipulation.length;i++){
//         let v=stringManipulation[i];
//         if(v =="a"||v == "e" || v == "i" || v == "o" || v == "u"  ||v =="A"||v == "E" || v == "I" || v == "O" || v == "U" ){
//             count = str.charAt();
//         }
//     }
//     return count;
// }




// console.log(stringManipulation('aiueo')); //5
// console.log(stringManipulation('ayam'));//2
// stringManipulation('bebek');

// function stringManipulation(word) {

//     //write ur code here
//     var temp = ['a','e','i','o','u'],
//     count = 0;
//     if (word.length === 0) {
//         return count;
//     } else {
//         for (var i = 0; i < word.length; i++) {
//             if (temp.indexOf(word[i]) !== -1) {
//                 count++;
//                 //word = temp.match(/aiuoe/gi);
//             }


//             word = word.slice(1);
//             return count + stringManipulation(word);
//         }
//     }
// }


// console.log(stringManipulation('aiueo')); //5
// console.log(stringManipulation('ayam'));//2
// stringManipulation('bebek');