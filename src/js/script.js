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