function verificarEstoque(estoque) {
    return estoque < 5;
}

function avisarEstoqueBaixo(nome, estoque) {
    if (verificarEstoque(estoque)) {
        alert(
            "Atenção! O vinho " + nome +
            " está com estoque baixo!"
        );
    }
}

function classificarVinho(safra) {
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - safra;

    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 10) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}