/* Verifica se o estoque do vinho está baixo */
function verificarEstoque(estoque) {
    return estoque < 5;
}

/* Mostra um alerta caso o estoque seja menor que 5 */
function avisarEstoqueBaixo(nome, estoque) {
    if (verificarEstoque(estoque)) {
        alert(
            "Atenção! O vinho " + nome +
            " está com estoque baixo!\n" +
            "Quantidade disponível: " + estoque
        );
    }
}

/* Classifica o vinho de acordo com a idade da safra */
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

/* Valida as informações digitadas pelo usuário */
function validarEntrada(valor, tipo) {
    if (valor === null) {
        return false;
    }

    // Verifica se o nome não está vazio
    if (tipo === "nome") {
        return valor.trim() !== "";
    }

    // Impede que números sejam informados em branco
    if (valor.trim() === "") {
        return false;
    }

    const numero = Number(valor);

    // Verifica se a safra é um ano inteiro válido
    if (tipo === "safra") {
        return Number.isInteger(numero) &&
            numero >= 1900 &&
            numero <= new Date().getFullYear();
    }

    // Verifica se o estoque é um inteiro não negativo
    if (tipo === "estoque") {
        return Number.isInteger(numero) && numero >= 0;
    }

    return false;
}

/* Solicita uma informação até que ela seja válida */
function solicitarEntrada(mensagem, tipo) {
    while (true) {
        const valor = prompt(mensagem);

        // Encerra a solicitação se o usuário cancelar
        if (valor === null) {
            return null;
        }

        if (validarEntrada(valor, tipo)) {
            // Retira os espaços extras do nome
            if (tipo === "nome") {
                return valor.trim();
            }

            return Number(valor);
        }

        alert("Informação inválida! Tente novamente.");
    }
}

/* Exibe os dados do vinho no console e na tela */
function mostrarDados(nome, safra, estoque, classificacao) {
    console.log("----- Dados do Vinho -----");
    console.log("Nome: " + nome);
    console.log("Safra: " + safra);
    console.log("Estoque: " + estoque);
    console.log("Classificação: " + classificacao);

    alert(
        "Vinho cadastrado com sucesso!\n\n" +
        "Nome: " + nome +
        "\nSafra: " + safra +
        "\nEstoque: " + estoque +
        "\nClassificação: " + classificacao
    );
}

/* Controla os cadastros e apresenta o resumo final */
function iniciarCadastro() {
    let continuar = true;

    // Contadores dos cadastros realizados
    let totalCadastros = 0;
    let totalEstoqueBaixo = 0;

    // Guarda o nome e a safra mais antiga encontrados
    let nomeMaisAntigo = "";
    let safraMaisAntiga = 0;

    while (continuar) {
        // Solicita o nome do vinho
        const nome = solicitarEntrada(
            "Digite o nome do vinho:",
            "nome"
        );

        if (nome === null) {
            break;
        }

        // Solicita a safra do vinho
        const safra = solicitarEntrada(
            "Digite a safra do vinho:",
            "safra"
        );

        if (safra === null) {
            break;
        }

        // Solicita a quantidade disponível em estoque
        const estoque = solicitarEntrada(
            "Digite a quantidade em estoque:",
            "estoque"
        );

        if (estoque === null) {
            break;
        }

        // Classifica e apresenta os dados do vinho
        const classificacao = classificarVinho(safra);

        mostrarDados(nome, safra, estoque, classificacao);
        avisarEstoqueBaixo(nome, estoque);

        // Conta o cadastro concluído
        totalCadastros++;

        // Conta os vinhos com estoque abaixo de 5
        if (verificarEstoque(estoque)) {
            totalEstoqueBaixo++;
        }

        // Compara as safras para encontrar a mais antiga
        if (
            totalCadastros === 1 ||
            safra < safraMaisAntiga
        ) {
            safraMaisAntiga = safra;
            nomeMaisAntigo = nome;
        }

        // Pergunta se o usuário deseja cadastrar outro vinho
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

    // Exibe o resumo final no console
    console.log("===== RESUMO FINAL =====");
    console.log("Total de cadastros: " + totalCadastros);
    console.log(
        "Vinhos com estoque baixo: " + totalEstoqueBaixo
    );

    // Exibe a safra mais antiga se houver algum cadastro
    if (totalCadastros > 0) {
        console.log(
            "Vinho com a safra mais antiga: " + nomeMaisAntigo
        );
        console.log("Safra mais antiga: " + safraMaisAntiga);

        alert(
            "===== RESUMO FINAL =====\n\n" +
            "Total de cadastros: " + totalCadastros +
            "\nVinhos com estoque baixo: " + totalEstoqueBaixo +
            "\nVinho com a safra mais antiga: " + nomeMaisAntigo +
            "\nSafra: " + safraMaisAntiga
        );
    } else {
        alert("Nenhum vinho foi cadastrado.");
    }

    alert("Cadastro finalizado!");
}

// Inicia o programa
iniciarCadastro();