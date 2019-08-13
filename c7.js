function weirdMultiply(sentence) {
    var temp = sentence.toString();
    var start = temp.split("");
    var next = 1;

    if (start.length == 1) {
        return sentence;
    } else {
        for (let i = 0; i < start.length; i++) {
            next *= Number(start[i]);
            console.log(start,'*',[i])
        }
        return weirdMultiply(next);
        
    }
    
}


console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));