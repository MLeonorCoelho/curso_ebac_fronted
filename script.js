const form = document.getElementById("formjs");

let formValido = false;

function numberValid(numeroA, numeroB){
    return numeroB > numeroA;
}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let numeroA = parseFloat(document.getElementById("numa").value);
    let numeroB = parseFloat(document.getElementById("numb").value);

    formValido = numberValid(numeroA, numeroB);

    if (formValido){
        alert("Formulário Válido");

    } else {
        alert("Formulário Inválido");
    }
})

