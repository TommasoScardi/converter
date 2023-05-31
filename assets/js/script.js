var Accepted = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function IsConvertible(string, base) {
    if (base == 2) {
        //Bin
        for (let i = 0; i < string.length; i++)
            if (!(string.charAt(i) == Accepted[0] || string.charAt(i) == Accepted[1]))
                return false;
        return true;
    } else if (base == 8) {
        //Oct
        for (let i = 0; i < string.length; i++)
            if (!(string.charAt(i) == Accepted[0] || string.charAt(i) == Accepted[1] || string.charAt(i) == Accepted[2] || string.charAt(i) == Accepted[3] || string.charAt(i) == Accepted[4] || string.charAt(i) == Accepted[5] || string.charAt(i) == Accepted[6] || string.charAt(i) == Accepted[7]))
                return false;
        return true;
    } else if (base == 10) {
        //Dec
        for (let i = 0; i < string.length; i++)
            if (!(string.charAt(i) == Accepted[0] || string.charAt(i) == Accepted[1] || string.charAt(i) == Accepted[2] || string.charAt(i) == Accepted[3] || string.charAt(i) == Accepted[4] || string.charAt(i) == Accepted[5] || string.charAt(i) == Accepted[6] || string.charAt(i) == Accepted[7] || string.charAt(i) == Accepted[8] || string.charAt(i) == Accepted[9]))
                return false;
        return true;
    } else if (base == 16) {
        //Exa
        for (let i = 0; i < string.length; i++)
            if (!(string.charAt(i) == Accepted[0] || string.charAt(i) == Accepted[1] || string.charAt(i) == Accepted[2] || string.charAt(i) == Accepted[3] || string.charAt(i) == Accepted[4] || string.charAt(i) == Accepted[5] || string.charAt(i) == Accepted[6] || string.charAt(i) == Accepted[7] || string.charAt(i) == Accepted[8] || string.charAt(i) == Accepted[9] || string.charAt(i) == Accepted[10] || string.charAt(i) == Accepted[11] || string.charAt(i) == Accepted[12] || string.charAt(i) == Accepted[13] || string.charAt(i) == Accepted[14] || string.charAt(i) == Accepted[15]))
                return false;
        return true;
    } else {
        //Error
        return false;
    }
}
//Funzioni eventi GUI
function BinToDec(binValue) {
    var tmp = binValue.toString();
    if (IsConvertible(tmp, 2)) {
        let valore = "";
        let convers = 0;
        // inversione dei bit
        for (let i = 0; i < tmp.length; i++) {
            valore += tmp[tmp.length - (i + 1)];
        }
        // calcolo numero decimale
        for (let i = 0; i < valore.length; i++) {
            convers += valore[i] * Math.pow(2, i);
        }
        // document.getElementById('conDec').value = convers;
        return convers;
    } else {
        return 0;
    }
}

function OttToDec(ottValue) {
    var tmp = ottValue.toString();
    if (IsConvertible(tmp, 8)) {
        let valore = "";
        let convers = 0;
        // inversione dei bit
        for (let i = 0; i < tmp.length; i++) {
            valore += tmp[tmp.length - (i + 1)];
        }
        // calcolo numero decimale
        for (let i = 0; i < valore.length; i++) {
            convers += valore[i] * Math.pow(8, i);
        }
        // document.getElementById('conDec').value = convers;
        return convers;
    } else {
        return 0;
    }
}

function LetterToNumber(Array, index) {
    let Cifre = ["A", 10, "B", 11, "C", 12, "D", 13, "E", 14, "F", 15];
    let Ris = [];
    let i;
    for (i = 0; i < Cifre.length; i = i + 2) {
        if (Array[index] == Cifre[i]) {
            Ris[0] = true;
            Ris[1] = Cifre[i + 1];
            console.log(Ris[0]);
            break;
        } else {
            Ris[0] = false;
            Ris[1] = -1;
            console.log(Ris[0]);
        }
    }
    return Ris;
}

function ExaToDec(exaValue) {
    var tmp = exaValue.toString().toUpperCase();
    if (IsConvertible(tmp, 16)) {
        let valore = "";
        let convers = 0;
        // inversione dei bit
        // console.log(tmp);
        document.getElementById('conExa').value = tmp;

        for (let i = 0; i < tmp.length; i++) {
            valore += tmp[tmp.length - (i + 1)];
        }
        console.log(valore);
        // calcolo numero decimale
        for (let i = 0; i < valore.length; i++) {
            // console.log(LetterToNumber(valore, i)[1]);
            if (LetterToNumber(valore, i)[0]) {
                convers += LetterToNumber(valore, i)[1] * Math.pow(16, i);
            } else {
                convers += valore[i] * Math.pow(16, i);
            }
        }
        return convers;
    } else {
        return 0;
    }
}

function DecToBin(decValue) {
    var tmp = decValue.toString();
    if (IsConvertible(tmp, 10)) {
        let valore = parseInt(tmp);
        let convers = "";
        let resto = 0;
        while (valore != 0) {
            resto = valore % 2;
            valore = (valore - resto) / 2;
            convers = resto + convers;
        }
        // document.getElementById('conBin').value = convers;
        return convers;
    } else {
        return 0;
    }
}

function DecToOtt(decValue) {
    var tmp = decValue.toString();
    if (IsConvertible(tmp, 10)) {
        let valore = parseInt(tmp);
        let convers = "";
        let resto = 0;
        while (valore != 0) {
            resto = valore % 8;
            valore = (valore - resto) / 8;
            convers = resto + convers;
        }
        // document.getElementById('conOtt').value = convers;
        return convers;
    } else {
        return 0;
    }
}

function DecToExa(decValue) {
    var tmp = decValue.toString();
    if (IsConvertible(tmp, 10)) {
        let valore = parseInt(tmp);
        let Cifre = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        let convers = "";
        let resto = 0;
        while (valore != 0) {
            resto = valore % 16;
            valore = (valore - resto) / 16;
            if (resto > 9) {
                resto = Cifre[resto];
            }
            convers = resto + convers;
        }
        // document.getElementById('conExa').value = convers;
        return convers;
    } else {
        return 0;
    }
}

function Convert(val, base) {
    let convDec = "";

    if (base == 2) {
        //Bin
        document.getElementById('conOtt').value = "";
        document.getElementById('conDec').value = "";
        document.getElementById('conExa').value = "";
        convDec = BinToDec(val);
        if (convDec != 0 && !isNaN(convDec)) {
            document.getElementById("error").innerHTML = "";
            document.getElementById('conOtt').value = DecToOtt(convDec);
            document.getElementById('conDec').value = convDec;
            document.getElementById('conExa').value = DecToExa(convDec);
        } else {
            document.getElementById("error").innerHTML = "Binario: Errore, inseriti caratteri non accettati";
        }
        if (val == "") {
            document.getElementById("error").innerHTML = "Inserisci Un Numero";
        }
    } else if (base == 8) {
        //Oct
        document.getElementById('conBin').value = "";
        document.getElementById('conDec').value = "";
        document.getElementById('conExa').value = "";
        convDec = OttToDec(val);
        if (convDec != 0 && !isNaN(convDec)) {
            document.getElementById("error").innerHTML = "";
            document.getElementById('conBin').value = DecToBin(convDec);
            document.getElementById('conDec').value = convDec;
            document.getElementById('conExa').value = DecToExa(convDec);
        } else {
            document.getElementById("error").innerHTML = "Ottale: Errore, inseriti caratteri non accettati";
        }
        if (val == "") {
            document.getElementById("error").innerHTML = "Inserisci Un Numero";
        }
    } else if (base == 10) {
        //Dec
        document.getElementById('conBin').value = "";
        document.getElementById('conOtt').value = "";
        document.getElementById('conExa').value = "";
        let valDec = parseInt(val);
        if (valDec != 0 && !isNaN(valDec) && IsConvertible(val, 10)) {
            document.getElementById("error").innerHTML = "";
            document.getElementById('conBin').value = DecToBin(valDec);
            document.getElementById('conOtt').value = DecToOtt(valDec);
            document.getElementById('conExa').value = DecToExa(valDec);
        } else {
            document.getElementById("error").innerHTML = "Decimale: Errore, inseriti caratteri non accettati";
        }
        if (val == "") {
            document.getElementById("error").innerHTML = "Inserisci Un Numero";
        }
    } else if (base == 16) {
        //Exa
        document.getElementById('conBin').value = "";
        document.getElementById('conOtt').value = "";
        document.getElementById('conDec').value = "";
        convDec = ExaToDec(val);
        if (convDec != 0 && !isNaN(convDec)) {
            document.getElementById("error").innerHTML = "";
            document.getElementById('conBin').value = DecToBin(convDec);
            document.getElementById('conOtt').value = DecToOtt(convDec);
            document.getElementById('conDec').value = convDec;
        } else {
            document.getElementById("error").innerHTML = "Esadecimale: Errore, inseriti caratteri non accettati";
        }
        if (val == "") {
            document.getElementById("error").innerHTML = "Inserisci Un Numero";
        }
    } else {
        //Error
        document.getElementById("error").innerHTML = "Errore Conversione";
    }

}

function Clear() {
    document.getElementById('conBin').value = "";
    document.getElementById('conOtt').value = "";
    document.getElementById('conDec').value = "";
    document.getElementById('conExa').value = "";
    document.getElementById("error").innerHTML = "Inserisci Un Numero";
}