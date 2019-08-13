function pola (str) {
    var array1 = str.split(' ');
    var array2 = str.split(' ');
    var array3 = str.split(' ');

    for (let i =0; i < 10; i++){
        for (let j=0; j<10; j++){
            if (parseInt(array1[0].replace('#', i)) * parseInt(array2[2]) == parseInt(array3[4].replace('#',j)))
            console.log([i , j]);
        }

    }
}
pola("42#3 * 188 = 80#204");
pola("8#61 * 895 = 78410#5");