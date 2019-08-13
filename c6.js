function sentenceManipulation(sentence) {
    var temp = (sentence);
    var code = temp.split(" ");
    var hasil = []


    for (var i = 0; i < code.length; i++) {
        if (code[i].charAt(0) == "a" || code[i].charAt(0) == "e"
            || code[i].charAt(0) == "i" || code[i].charAt(0) == "o"
            || code[i].charAt(0) == "u") {
            hasil.push(code[i])


        } else {
            var issentence = (code[i] + code[i].charAt(0) + 'nyo').slice(1);
            hasil.push(issentence)
        }
    }


    console.log(hasil.join(" "));
}
sentenceManipulation("ibu pergi ke pasar bersama aku");
sentenceManipulation("bebek");