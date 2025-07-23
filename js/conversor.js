function converterTemp() {
    let tipo = document.getElementById("tipo").value;
    let tempInfo = parseFloat(document.getElementById("temp-info").value);

    console.log(tipo, tempInfo);
    console.log(typeof tempInfo);

    if (tipo == "") {
        alert("Ei!!! Escolha o tipo!");
        document.getElementById("tipo").focus();
        return;
    }

    if (typeof tempInfo !== 'number' || isNaN(tempInfo)) {
        alert("NAO É NUMERO");
        document.getElementById("temp-info").focus();
        return;
    }

    console.log("O calculo Continuou");

    let resultado;

    if (tipo == '1') {
        resultado = (((tempInfo * 9 / 5) + 32) * 100) / 100;
    }

    else if (tipo == '2') {
        resultado = parseFloat(tempInfo + 273.15).toFixed(2);
    }

    else if (tipo == '3') {
        resultado = parseFloat(((tempInfo - 32) * 5 / 9).toFixed(2));
    }

    else if (tipo == '4') {
        resultado = parseFloat(((tempInfo - 32) * 5 / 9) + 273.15).toFixed(2);
    }

    else if (tipo == '5') {
        resultado = parseFloat(tempInfo - 273.15).toFixed(2);
    }

    else {
        resultado = parseFloat(((tempInfo - 273.15) * 9 / 5) + 32).toFixed(2);
    }

    document.getElementById("temp-convert").value = resultado;
    console.log(resultado);

}


document.getElementById("limpar").addEventListener("click", function () {
    document.getElementById("tipo").value = "";
    document.getElementById("temp-info").value = "";
    document.getElementById("temp-convert").value = "";
    document.getElementById("tipo").focus();
});


// ou
// document.getElementById("limpar").addEventListener("click", 
// function () 
// {
//     limpar("tipo");
//     limpar("temp-info");
//     limpar("temp-convert");
//     document.getElementById("tipo").focus();
// });

// function limpar(id){
//     document.getElementById(id).value = "";
// }
