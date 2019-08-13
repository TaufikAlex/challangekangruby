function pola(str) {
    //write ur code here
    var strarray = str.split(" ");
    var cari = false;

    while (cari == false) {
        var i = 0;
        while (i <= 9 && cari == false) {
            var angka1 = Number(strarray[0].replace("#", `${i}`));
            var angka2 = Number(strarray[2]);
            var j = 0;
            while (j <= 9 && cari == false) {
                var angka3 = Number(strarray[4].replace("#", `${j}`));
                if (angka1 * angka2 == angka3) {
                    cari = true;
                    var faktor = [i, j];
                }
                else
                    j++;
            }
            i++;
        }
    }
    return faktor;

}

console.log(pola("42#3 * 188 = 80#204"));