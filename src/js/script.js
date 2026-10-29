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

    let resposta;

    while (true) {
        resposta = prompt(
            "Deseja cadastrar outro vinho? (sim/não)"
        );

        if (resposta === null) {
            continuar = false;
            break;
        }

        resposta = resposta.trim().toLowerCase();

        if (resposta === "sim") {
            break;
        }

        if (resposta === "não" || resposta === "nao") {
            continuar = false;
            break;
        }

        alert("Resposta inválida! Digite sim ou não.");
    }
}

alert("Cadastro finalizado!");

function verificarEstoque(estoque) {
    return estoque < 5;
}
function avisarEstoqueBaixo(nome, estoque) {
    if (verificarEstoque(estoque)) {
        alert(
            "Atenção! O vinho " + nome +
            " está com estoque baixo!\n" +
            "Quantidade disponível: " + estoque
        );
    }
}

function classificarVinho(safra) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - safra;

    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 10) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

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

    const numero = Number(valor);

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
    while (true) {
        const valor = prompt(mensagem);

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
    const nome = solicitarEntrada(
        "Digite o nome do vinho:",
        "nome"
    );

    if (nome === null) {
        return false;
    }

    const safra = solicitarEntrada(
        "Digite a safra do vinho:",
        "safra"
    );

    if (safra === null) {
        return false;
    }

    const estoque = solicitarEntrada(
        "Digite a quantidade em estoque:",
        "estoque"
    );

    if (estoque === null) {
        return false;
    }

    const classificacao = classificarVinho(safra);

    alert(
        "Vinho cadastrado com sucesso!\n\n" +
        "Nome: " + nome +
        "\nSafra: " + safra +
        "\nEstoque: " + estoque +
        "\nClassificação: " + classificacao
    );

    
    avisarEstoqueBaixo(nome, estoque);

    return true;
}

function iniciarCadastro() {
    let continuar = true;

    while (continuar) {
        const cadastrado = cadastrarVinho();

        if (!cadastrado) {
            break;
        }

        while (true) {
            const resposta = prompt(
                "Deseja cadastrar outro vinho? (sim/não)"
            );

            if (resposta === null) {
                continuar = false;
                break;
            }

            const respostaFormatada = resposta
                .trim()
                .toLowerCase();

            if (respostaFormatada === "sim") {
                break;
            }

            if (
                respostaFormatada === "não" ||
                respostaFormatada === "nao"
            ) {
                continuar = false;
                break;
            }

            alert("Resposta inválida! Digite sim ou não.");
        }
    }

    alert("Cadastro finalizado!");
}

iniciarCadastro();
