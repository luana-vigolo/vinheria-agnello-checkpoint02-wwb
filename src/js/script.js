
function validarEntrada(valor, tipo) {
    if (valor === null) {
        return false;
    }

    if (tipo === "nome") {
        return valor.trim() !== "";
    }

    if (valor.trim() === "") {
        return false;
    }

    let numero = Number(valor);

    if (tipo === "safra") {
        return Number.isInteger(numero) &&
            numero >= 1900 &&
            numero <= new Date().getFullYear();
    }

    if (tipo === "estoque") {
        return Number.isInteger(numero) && numero >= 0;
    }

    return false;
}

function solicitarEntrada(mensagem, tipo) {
    let valor;

    while (true) {
        valor = prompt(mensagem);

        if (valor === null) {
            return null;
        }

        if (validarEntrada(valor, tipo)) {
            if (tipo === "nome") {
                return valor.trim();
            }

            return Number(valor);
        }

        alert("Informação inválida! Tente novamente.");
    }
}

function cadastrarVinho() {
    let nome = solicitarEntrada(
        "Digite o nome do vinho:",
        "nome"
    );

    if (nome === null) {
        return false;
    }

    let safra = solicitarEntrada(
        "Digite a safra do vinho:",
        "safra"
    );

    if (safra === null) {
        return false;
    }

    let estoque = solicitarEntrada(
        "Digite a quantidade em estoque:",
        "estoque"
    );

    if (estoque === null) {
        return false;
    }

    alert(
        "Vinho cadastrado com sucesso!\n\n" +
        "Nome: " + nome +
        "\nSafra: " + safra +
        "\nEstoque: " + estoque
    );

    return true;
}

let continuar = true;

while (continuar) {
    let cadastrado = cadastrarVinho();

    if (!cadastrado) {
        break;
    }

    let resposta = prompt(
        "Deseja cadastrar outro vinho? (sim/não)"
    );

    if (
        resposta === null ||
        resposta.trim().toLowerCase() !== "sim"
    ) {
        continuar = false;
    }
}

alert("Cadastro finalizado!");
