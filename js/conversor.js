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
        alert("NAO É NUMERO")
        document.getElementById("temp-info").focus();
        return;
    }

    console.log("O calculo Continuou");

}