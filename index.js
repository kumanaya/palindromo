function Palindromo(string) {
    let reverse = "";

    for (var i = string.length; i--;) {
        reverse = reverse + string[i]
    }

    if (string.toLowerCase() === reverse.toLowerCase()) {
        return true;
    }
    return false;
}

console.log(Palindromo("anilina"));